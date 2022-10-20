import ConvertCardModel from "../schemaModels/convertCardModel";

export const createConverCardService = async(newConverCard={}) =>{
    try {
        return await ConvertCardModel.create(newConverCard).lean();
    } catch (error) {
        console.log(error);
        return error;
    }
}


export const checkIsConverCardExistByUserId = async(user_id) =>{
    try {
        return await ConvertCardModel.exists({user_id}).lean();
    } catch (error) {
        console.log(error);
        return error;
    }
}

// update a convert card by user_id
export const updateConverCardByUserIdService = async(user_id,updateConvertCardInfo={}) =>{
    try {
        return await ConvertCardModel.findOneAndUpdate({user_id},updateConvertCardInfo,{new:true}).lean();
    } catch (error) {
        console.log(error);
        return error;
    }
}

