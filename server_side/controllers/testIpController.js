import { getTestIpUserByIpAddressService } from "../services/testIpUserService";

export const getTestIpCtl = async(req,res,next) =>{
    
    try {
        const reqIP = req.headers['x-forwarded-for'] || 
                    req.connection.remoteAddress || 
                    req.socket.remoteAddress ||
                    req.connection.socket.remoteAddress;

        const {ip,...restDoc} = await getTestIpUserByIpAddressService(reqIP);

        if (restDoc._id) {
            res.status(200).json({error:false,message:"",data:restDoc})
        }else{
            throw new Error(restDoc.message)
        }
    } catch (error) {
        res.status(500).json({error:true,message: error.message ?? "Fail to send IP address info!"})
    }
}