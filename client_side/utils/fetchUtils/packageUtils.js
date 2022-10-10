import { envInfo } from "../../../server_side/utils/envInitializer";


export const getPackages = async(queryStr="?") =>{
    console.log(queryStr);
    try {
        const packageRes = await fetch(`${envInfo.FRONTEND_BASE_URL}/api/v1/package${queryStr}`);
        const packages = await packageRes.json();
        if (!packages.error) {
            return {package_error:false,packages:packages.packages}
        }else{
            return {package_error:false,message:packages?.message}
        }
    } catch (error) {
        console.log(error);
        return {package_error:true,message:error.message}
    }
}