import { getConvertCardByUserIdService } from "../services/convertCardServices";

export const getSingleConvertCardCtl = async(req,res,next) =>{
    const {user_id} = req.query;
    try {
        if (user_id) {
            const convertCard = await getConvertCardByUserIdService(user_id);
            
            if (convertCard) {
                res.status(200).json({error:false,data:convertCard})
            }else if(convertCard === null){
                res.status(200).json({error:false,data:{}})
            }else{
                throw new Error(convertCard?.message ?? "Error occured to get convert card")
            }
        }else{
            throw new Error("User id is required")
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:true,message:error?.message??"Failed to search for the convert card."})
    }
}

