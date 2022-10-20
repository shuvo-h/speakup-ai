import PaymentSlipsModel from "../schemaModels/paymentSlips";

export const createPaymentSlipService = async(newSlipData) =>{
    try {
        const paymentSlip = await PaymentSlipsModel.create(newSlipData);
        return paymentSlip;
    } catch (error) {
        console.log(error);
        return {error:false,message:error.message}
    }
}

export const getSlipByAgetPayIDAndUserIdService = async(agent_pay_id,user_id) =>{
    try {
        const paymentSlip = await PaymentSlipsModel.findOne({agent_pay_id,'userInfo.id':user_id}).lean();
        return paymentSlip;
    } catch (error) {
        console.log(error);
        return {error:false,message:error.message}
    }
}