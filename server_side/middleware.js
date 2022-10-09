import db from "./db/db";
import UsersModel from "./schemaModels/user";
import { generateToken } from "./utils/tokenAndHashMaker";
const bcrypt = require("bcrypt");

export const checkEmailExist = async (req,res,next) =>{
    try {
        await db.connect();
        const esixtUser = await UsersModel.findOne({email:req.body?.email});
        if (esixtUser?._id) {
            res.status(401).json({error:true,message:"Email already exist!"})
        }else{
            next();
        }
        await db.disconnect();
    } catch (error) {
        console.log(error);
        res.json({error: true, message:error.message})
    }
}

export const makeHashPassword = async (req,res,next) =>{
    try {
        // make hash the password
        const saltRound = 10;
        const hashedPassword =  req.body.password ? await bcrypt.hash(req.body.password,saltRound) : null;
        req.body = {...req.body,password:hashedPassword}
        next();
    } catch (error) {
        console.log(error);
        res.json({error: true, message:error.message})
    }
}

export const generateUserToken = async (req,res,next) =>{
    const {email,password} = req.body;
    try {
        await db.connect();
        const user = await UsersModel.findOne({email});
        await db.disconnect();
        
        if (user && bcrypt.compareSync(password,user.password)) {
            const userTokenInfo = {
                _id: user.id, 
                name: user.name,
                email: user.email,
            }
            
            const token = generateToken(userTokenInfo);
            const resData = {token,...userTokenInfo};
            req.user = resData;
            next();
        }else{
            res.status(401).json({error:true,message:"Invalid user email or password", data:{}});
        }
    } catch (error) {
        console.log(error);
        res.json({error: true, message:error.message})
    }
}

