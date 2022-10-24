import db from "../db/db";
import ConvertCardModel from "../schemaModels/convertCardModel";
import PackageModel from "../schemaModels/package";

export const createConverCardService = async(newConverCard={}) =>{
    try {
        await db.connect();
        const result = await ConvertCardModel.create(newConverCard);
        await db.disconnect();
        return result.toJSON();
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
// update a convert card by card id
export const updateConverCardByIdService = async(card_id,updateConvertCardInfo={}) =>{
    try {
        await db.connect();
        const result =  await ConvertCardModel.findOneAndUpdate({_id:card_id},updateConvertCardInfo,{new:true}).lean();
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
        const result =  await ConvertCardModel.findOne({user_id}).populate({path:'package_id',select:'name languages fileTypes'}).lean();
        await db.disconnect();
        return result
    } catch (error) {
        console.log(error);
        return error;
    }
}

// get a convert card by user_id
export const getConvertCardbyIdService = async(card_id) =>{
    
    try {
        await db.connect();
        const result =  await ConvertCardModel.findOne({_id:card_id}).populate({path:'package_id',select:'name languages fileTypes'}).lean();
        await db.disconnect();
        return result
    } catch (error) {
        console.log(error);
        return error;
    }
}
// get a convert card by user_id
export const updateCardAfterConvertService = async(card_id) =>{
    
    try {
        await db.connect();
        const result =  await ConvertCardModel.findOne({_id:card_id}).populate({path:'package_id',select:'name languages fileTypes'}).lean();
        await db.disconnect();
        return result
    } catch (error) {
        console.log(error);
        return error;
    }
}

