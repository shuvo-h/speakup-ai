import jwt from 'jsonwebtoken';
import { getUserByIdService } from '../services/userServices';
import { envInfo } from "../utils/envInitializer";

export const checkLogin = async (req,res,next) =>{
    
    const token = req.headers?.authorization?.startsWith("Bearer " ) ? req.headers?.authorization?.split(" ")[1] : null;
   
    try {
        
        if (token) {
            // decode the token and check if the user is real user
            const decodedUser = jwt.verify(token,envInfo.JWT_SECRET);
            
            if (decodedUser.email) {
                const dbUser = await getUserByIdService(decodedUser._id,{email:1}) 
                if (dbUser._id.toString() === decodedUser._id && dbUser.email === decodedUser.email) {
                    // console.log(dbUser,"dbUser");
                    req.decodedUser = decodedUser;
                    next();
                }else{
                    throw new Error("Invalid Token. Please provide a valid token!")
                }
            }else{
                throw new Error("Invalid Token. Please provide a valid token!")
            }
        }else{
            throw new Error("Authentication required!");
        }
    } catch (error) {
        res.status(401).json({error:true,message: error.message});
    }
}

