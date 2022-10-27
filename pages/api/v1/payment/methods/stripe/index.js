import db from "../../../../../../server_side/db/db";
import PackageModel from "../../../../../../server_side/schemaModels/package";
import { getPackageByIdService } from "../../../../../../server_side/services/packageService";
import { createPaymentSlipService } from "../../../../../../server_side/services/paymentSlipServices";
import { getUserByIdService } from "../../../../../../server_side/services/userServices";
import { envInfo } from "../../../../../../server_side/utils/envInitializer";
import { calculatePackageAmount } from "../../../../../../server_side/utils/packageUtils";

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(envInfo.STRIPE_SECRET_KEY);

const calculateOrderAmount = (amountIn_USD) => {
    return parseInt(parseFloat(amountIn_USD) * 100); // stripe cut payment with cent, so multiply 100 to make usd to cent
};

const organizePuschaseInfo = async(pruchaseData) =>{
  try {
    // find the package info
    await db.connect();
    const reqPackage = await PackageModel.findOne({_id:pruchaseData.package_id,status:'active'}).lean();
    
    // console.log(reqPackage,"req=Package");
    if (reqPackage._id) {
      // calculate the package with duration
      const calculatedPkg = calculatePackageAmount(reqPackage,pruchaseData.duration);
      const userEmail = await getUserByIdService(pruchaseData.user_id,{email:1,_id:0});
      // find the user info and combine a confirm order slip
      
     if ((parseFloat(pruchaseData.amount) === calculatedPkg.pay_amount) && (calculatedPkg.status === 'active') && userEmail.email) {
      const {_id,__v,createdAt,pay_amount,updatedAt,commercial,status, ...restCalculatedPkg } = calculatedPkg;
       const newOrder = {
        ...restCalculatedPkg,
        package_id: _id,
        amount: pay_amount,
        method: pruchaseData.method,
        userInfo:{
          id: pruchaseData.user_id,
          email: userEmail.email
        },
       }
       await db.disconnect();
        return newOrder;
     }else{
      return {error:true,message:"Wrong purchase data!"}
     }
    }else{
      return {error:true,message:"Package didn't find"}
    }
    
  } catch (error) {
    console.log(error);
    return {error:true,message:error.message}
  }
}
  
export default async function handler(req, res) {
  try {
    const newOrder = await organizePuschaseInfo(req.body);
    if (!newOrder.error) {
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(newOrder.amount), // make the USD to-> cent
        currency: "usd",
        payment_method_types: ['card'], // this will allow only card payment
        statement_descriptor: `Purchasing package`,
      });
      
      
      // store the information here in Database before sending response
      const paymentSlip = await createPaymentSlipService({...newOrder,pay_status:false,pay_to:"stripe",agent_pay_id:"",agent_pay_id:paymentIntent.id})
      
      if (paymentSlip._id) {
        res.send({clientSecret: paymentIntent.client_secret});
      }else{
        const errMessage = paymentSlip.message??"Unknown error occured during creating payment slip.";
        console.log(errMessage);
       res.send({error:errMessage,message:errMessage})
     }
      
    }else{
      res.json({error:true,message: newOrder.message})
    }
    
  } catch (error) {
    console.log(error);
    res.json({error:true,message: error.message})
  }
};