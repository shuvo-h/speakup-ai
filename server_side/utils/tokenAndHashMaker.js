import jwt from "jsonwebtoken";
import { envInfo } from "./envInitializer";

export const generateToken = user =>{
    const payloadObj = {
        _id: user.id, 
        name: user.name,
        email: user.email,
    }
    const jwt_option = {
        expiresIn: "1d"
    }
    const token = jwt.sign(payloadObj,envInfo.JWT_SECRET,jwt_option);
    return token;
}