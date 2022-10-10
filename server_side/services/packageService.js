import db from "../db/db";
import PackageModel from "../schemaModels/package";


export const addPackageService = async(newPackageData) =>{
    try {
        await db.connect();
        const packageResult = await PackageModel.create(newPackageData);
        await db.disconnect();
        return packageResult;
    } catch (error) {
        console.log(error.message);
        return {error: true,message: error.message}
    }
}

export const getAllPackagesService = async(mainQuery) =>{
    const filters = {...mainQuery}
    const excludeFields = ['sort','fields'];
    try {
        // format the query
        excludeFields.forEach(field=> delete filters[field]);
        const queries = {};
        // how the data will be sorted 
        if (mainQuery.sort) {
            const sortBy = mainQuery.sort.split(",").join(" ");
            queries.sortBy = sortBy;
        }
        // which fields will be returned
        if (mainQuery.fields) {
            const fields = mainQuery.fields.split(",").join(" ");
            queries.fields = fields;
        }

        await db.connect();
        const packages = await PackageModel.find(filters).sort(queries.sortBy).select(queries.fields);
        await db.disconnect();
        return packages;
    } catch (error) {
        console.log(error.message);
        return {error: true,message: error.message}
    }
}
