import { addUserService, getUserService } from "../services/userServices";
import { envInfo } from "../utils/envInitializer";

export  async function getUserCtl(req,res,next){
    res.status(200).json(req.user)
}

export  async function addNewUserCtl(req,res,next){
    const user = await addUserService(req.body)
    if (!user.error) {
        res.status(200).json(user)
    }else{
        res.status(500).json(user)
    }
}

