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



const handler = nextHandler();

// check if compare the password, create and send JWT
handler.post(checkLogin,getStripeInfoCtl);

export default handler;



async function getStripeInfoCtl(req, res,next) {
  const {stripe_intent_id} = req.query;
  const decodedUser = req.decodedUser; 
  try {
    if (stripe_intent_id && decodedUser._id) {
      // get the payment information from stripe and check with user data
      // const paymentIntentInfo = await stripe.paymentIntents.retrieve('pi_3LssYXDZzhqf7ann2dlI6iqn',);
      const paymentIntentInfo = await stripe.paymentIntents.retrieve(stripe_intent_id);
      const userPaymentSlip = await getSlipByAgetPayIDAndUserIdService(stripe_intent_id,decodedUser._id);

      res.json({message:"match the paymentIntentInfo & userPaymentSlip that user has paid correctly equal amount and then update the /pay_status & package_expire_status,/ from DB and create a convertCardSchema for this package so that we can query from the card during conver counting. Remenber to re edit the start/expire time again because, user may pay later, so this current expire time will not be valid. so update the new date during updating the pay status"})
      
    }else{
      throw new Error("Payment Confirmation id is required.") // user will go back from checkLogin middelware for bad token to here err message is static
    }
    
  } catch (error) {
    res.json({error:true,message: error.message})
  }
  
};

