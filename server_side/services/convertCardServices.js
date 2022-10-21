import db from "../db/db";
import ConvertCardModel from "../schemaModels/convertCardModel";

export const createConverCardService = async(newConverCard={}) =>{
    try {
        await db.connect();
        const result = await ConvertCardModel.create(newConverCard);
        await db.disconnect();
        return result
    } catch (error) {
        console.log(error);
        return error;
    }
}


export const checkIsConverCardExistByUserId = async(user_id) =>{
    try {
        await db.connect();
        const result =  await ConvertCardModel.exists({user_id}).lean();
        await db.disconnect();
        return result
    } catch (error) {
        console.log(error);
        return error;
    }
}

// update a convert card by user_id
export const updateConverCardByUserIdService = async(user_id,updateConvertCardInfo={}) =>{
    try {
        await db.connect();
        const result =  await ConvertCardModel.findOneAndUpdate({user_id},updateConvertCardInfo,{new:true}).lean();
        await db.disconnect();
        return result
    } catch (error) {
        console.log(error);
        return error;
    }
}


// get a convert card by user_id
export const getConvertCardByUserIdService = async(user_id) =>{
    try {
        await db.connect();
        const result =  await ConvertCardModel.findOne({user_id}).lean();
        await db.disconnect();
        return result
    } catch (error) {
        console.log(error);
        return error;
    }
}

