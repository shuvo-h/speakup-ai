import { addPackageService, getAllPackagesService } from "../services/packageService"



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

