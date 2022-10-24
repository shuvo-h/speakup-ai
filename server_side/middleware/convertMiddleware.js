import { getConvertCardbyIdService, updateConverCardByIdService } from "../services/convertCardServices";

export const checkCardLimit = async(req,res,next)=>{
    try {
        // check if the limit and card active all are satisfied
        if (req.decodedUser?._id) {
            const {convertCard_id} = req.query;
            const {text,lang} = req.body;
            if (convertCard_id) {
                const convertCard = await getConvertCardbyIdService(convertCard_id);
                // check: language is in card
                if (convertCard?.package_id?.languages?.includes(lang)) {
                    // check if package is expirted
                    const isNotExpire = new Date(convertCard.package_expire) >= new Date();
                    if ((convertCard?.card_status === 'active') && convertCard?.package_expire && isNotExpire) {
                        // card is not expired, check req limit
                        const isToday = new Date(convertCard.req_per_day_reamining.today).toISOString().split("T")[0] === new Date().toISOString().split("T")[0];
                        if ( isToday && convertCard.req_per_day_reamining.req_reamining > 0) {
                            // accept the request and check the character limit per request
                            const textLength = text.length;
                            if (convertCard.character_limit_per_req >= textLength) {
                                // text length is in limit, check total character for this package
                                if (convertCard.character_limit_reamining >= textLength) {
                                    next();
                                }else{
                                    res.status(403).json({error:true,message:`You reached your maximum character for this month. Please renew your package! or if you are using a yearly package, wait for the next month to be auto renual`})
                                }
                            }else{
                                // character per req exceed. please send small text than the limit
                                res.status(403).json({error:true,message:`Maximum ${convertCard.character_limit_per_req} characters allowed for each convert!`})
                            }
                        }else{
                            // return that the today's req limit has exceed
                            res.status(403).json({error:true,message:"You have reached to maximum number of request for today!"})
                        }
                    }else{
                        // card is expired; update card status to "inactive"
                        if(convertCard?.card_status === 'active'){
                            const updatedCard = await updateConverCardByIdService(convertCard_id,{card_status:'inactive'})
                        }
                        res.status(403).json({error:true,message:"Card is not ACTIVE"})
                    }
                    
                }else{
                    res.status(403).json({error:true,message:"Invalid Language!"})
                }
            }else{
                res.status(403).json({error:true,message:"Card id is required"})
            }
            // find the card by convertCard_id and user_id
        }else{
            res.status(403).json({error:true,message:"Authentication is required"})
        }
    } catch (error) {
        console.log(error);
        res.status(403).json({error:true,message:error.message})
    }
}