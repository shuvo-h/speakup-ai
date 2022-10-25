import db from "../db/db";
import TestIpModel from "../schemaModels/testIpModel";

export const getTestIpUserByIpAddressService = async(ipAddress) =>{
    try {
        await db.connect();
        const ipResult = await TestIpModel.findOne({ip:ipAddress}).lean();
        await db.disconnect();
        return ipResult;
    } catch (error) {
        console.log(error.message);
        return {error: true,message: error.message}
    }
}

export const createNewIpUserService = async(ipAddress) =>{
    try {
        await db.connect();
        const ipResult = await TestIpModel.create({ip:ipAddress,today: new Date().toISOString().split("T")[0]});
        await db.disconnect();
        return ipResult;
    } catch (error) {
        console.log(error.message);
        return {error: true,message: error.message}
    }
}

export const updateTestIpUserByIdService = async(docId,updateDoc={}) =>{
    try {
        await db.connect();
        const ipResult = await TestIpModel.findOneAndUpdate({_id:docId},updateDoc,{runValidators:true});
        await db.disconnect();
        return ipResult;
    } catch (error) {
        console.log(error.message);
        return {error: true,message: error.message}
    }
}

export const updateTestIpUserAfterConvByIdService = async(docId,updateDoc={characters_used:0}) =>{
    try {
        await db.connect();
        const ipResult = await TestIpModel.findOneAndUpdate(
            {_id:docId},
            {
                $inc:{characters_used: updateDoc.characters_used}
            },
            {runValidators:true}
        );
        await db.disconnect();
        return ipResult;
    } catch (error) {
        console.log(error.message);
        return {error: true,message: error.message}
    }
}
