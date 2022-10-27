import db from "../db/db";
import PaymentSlipsModel from "../schemaModels/paymentSlips";

export const createPaymentSlipService = async(newSlipData) =>{
    try {
        await db.connect();
        const paymentSlip = await PaymentSlipsModel.create(newSlipData);
        await db.disconnect();
        return paymentSlip;
    } catch (error) {
        console.log(error);
        return {error:false,message:error.message}
    }
}

export const getSlipByAgetPayIDAndUserIdService = async(agent_pay_id,user_id) =>{
    try {
        await db.connect();
        const paymentSlip = await PaymentSlipsModel.findOne({agent_pay_id,'userInfo.id':user_id}).lean();
        await db.disconnect();
        return paymentSlip;
    } catch (error) {
        console.log(error);
        return {error:false,message:error.message}
    }
}