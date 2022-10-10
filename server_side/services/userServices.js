import db from "../db/db";
import UsersModel from "../schemaModels/user";

export const addUserService = async(newUserData) =>{
    try {
        await db.connect();
        const userResult = await UsersModel.create(newUserData);
        await db.disconnect();
        return userResult;
    } catch (error) {
        console.log(error.message);
        return {error: true,message: error.message}
    }
}

export const getUserService = async(email) =>{
    try {
        await db.connect();
        const userResult = await UsersModel.findOne({email});
        await db.disconnect();
        return userResult;
    } catch (error) {
        console.log(error.message);
        return {error: true,message: error.message}
    }
}