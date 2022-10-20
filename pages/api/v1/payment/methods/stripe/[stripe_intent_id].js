import db from "../../../../../../server_side/db/db";
import PackageModel from "../../../../../../server_side/schemaModels/package";
import { getPackageByIdService } from "../../../../../../server_side/services/packageService";
import { getUserByIdService } from "../../../../../../server_side/services/userServices";
import { envInfo } from "../../../../../../server_side/utils/envInitializer";
import { calculatePackageAmount } from "../../../../../../server_side/utils/packageUtils";

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(envInfo.STRIPE_SECRET_KEY);
import nextHandler from "next-connect";
import { checkLogin } from "../../../../../../server_side/middleware/AuthMiddleware";
import { getSlipByAgetPayIDAndUserIdService } from "../../../../../../server_side/services/paymentSlipServices";
import { checkIsConverCardExistByUserId, createConverCardService, updateConverCardByUserIdService } from "../../../../../../server_side/services/convertCardServices";



const handler = nextHandler();

// check if compare the password, create and send JWT
handler.post(checkLogin,getStripeInfoCtl);

export default handler;



async function getStripeInfoCtl(req, res,next) {
  const {stripe_intent_id} = req.query;
  const decodedUser = req.decodedUser; 
 
  try {
    if(decodedUser._id){
      if(stripe_intent_id){
        // get the payment information from stripe and check with user data
        // const paymentIntentInfo = await stripe.paymentIntents.retrieve('pi_3LssYXDZzhqf7ann2dlI6iqn',);
        const paymentIntentInfo = await stripe.paymentIntents.retrieve(stripe_intent_id);
        const userPaymentSlip = await getSlipByAgetPayIDAndUserIdService(stripe_intent_id,decodedUser._id);
        if ((parseFloat(userPaymentSlip.amount)*100).toFixed(2) === (paymentIntentInfo.amount).toFixed(2) && (parseFloat(userPaymentSlip.amount)*100).toFixed(2) === (paymentIntentInfo.amount_received).toFixed(2)) {
          // check if the user already has an exist convertCard, so make upsert->True
          const isExistCard = await checkIsConverCardExistByUserId(decodedUser._id);
          const newConvertCardInfo = {
            user_id: decodedUser._id,
            package_start: userPaymentSlip.package_start,
            package_expire: userPaymentSlip.package_expire,
            card_status: 'active',
            character_limit: userPaymentSlip.character_limit,
            character_limit_per_req: userPaymentSlip.character_limit_per_req,
            req_per_day: userPaymentSlip.req_per_day,
            size: 0,
            file_count: 0
          }
          if (isExistCard._id) {
            // update the card
            delete newConvertCardInfo.user_id; // delete the user_id, we don't want to update it
            delete newConvertCardInfo.size; // delete the size, we don't want to update it
            delete newConvertCardInfo.file_count; // delete the file_count, we don't want to update it
            newConvertCardInfo.card_status = new Date(userPaymentSlip.package_expire) > new Date() ? 'active':'inactive'
            const updatedCard = await updateConverCardByUserIdService(decodedUser._id,newConvertCardInfo);
            console.log(updatedCard,"updatedCard");
            if (!updatedCard.error) {
              res.status(200).json({card:"ok",...updatedCard})
            }else{
              res.status(403).json({error:true,message:updatedCard.message??"Failed to update convert card!"})
            }
          }else{
            // create the card as it is new user
            const newCard = await createConverCardService(newConvertCardInfo);
            console.log(newCard,"newCard");
            if (newCard._id) {
              res.status(200).json({card:"ok",...newCard})
            }else{
              res.status(403).json({error:true,message:newCard.message??"Failed to create convert card!"})
            }
          }
        }else{
          throw new Error("Invalid payment amount!");
        }
      }else{
        throw new Error("Payment Confirmation id is required.");
      }
    }else{
      throw new Error("Invalid Authotication");
    }
  } catch (error) {
    res.status(403).json({error:true,message: error.message})
  }
  
};

