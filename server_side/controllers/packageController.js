import { addPackageService, getAllPackagesService, getPackageByIdService } from "../services/packageService"
import {calculatePackageAmount} from "../utils/packageUtils"


export  async function packageAddCtl(req,res,next){
    const newPackage = await addPackageService(req.body)
    if (!newPackage.error) {
        res.status(200).json(newPackage)
    }else{
        res.status(500).json(newPackage)
    }
}

export  async function allPackagesCtl(req,res,next){
    const packages = await getAllPackagesService(req.query)
    if (!packages.error) {
        res.status(200).json({error:false,packages})
    }else{
        res.status(500).json({error:true,packages})
    }
}

export  async function getPackageByIdCtl(req,res,next){
    const {package_id,duration,...restFilters} = req.query;
    if (!package_id) {res.status(500).json({error:true,message:"Package id is required"})}
    // use filters here
    let packageData = await getPackageByIdService(package_id,restFilters);
   
    if (packageData === null) {
        return res.status(200).json({error:false,data:{}})
    }
    if (packageData?._id) {
        // calculate the price amount if duration is available in query
        if (duration && packageData) {
            packageData = calculatePackageAmount(packageData,duration)
        }
        res.status(200).json({error:false,data:packageData})
    }else{
        res.status(500).json({error:true,message:packageData?.message})
    }
}

