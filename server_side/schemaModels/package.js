import mongoose from "mongoose";
import { gttActiveLanguages } from "../utils/activeLanguageGttUnOfficial";


const packageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide your name"], 
            trim: true, 
            lowercase:true,
            unique:[true,"Package aleady exist"],
            minLength: [3, "Name must be at least 3 characteres."],
            maxLength: [100, "Name is too large."],
        },
        character_limit: {
            type: Number,
            required: [true,"Need  a limit for the total character"],
            default:0,
            min:[0,"Character limit can not be negative"]
        },
        character_limit_per_req: {
            type: Number,
            required: [true,"Need  a character limit for each request"],
            default:0,
            min:[0,"Request Character limit can not be negative"]
        },
        price: {
            type: Number,
            required: [true,"Price is required for this package"],
            default:0,
            min:[0,"Price can not be negative"]
        },
        discount_monthly:{
            type: Number,
            default:0,
            min:[0,"Monthly discount can not be negative"]
        },
        discount_yearly:{
            type: Number,
            default:0,
            min:[0,"Yearly discount can not be negative"]
        },
        discount_offer:{
            type: Number,
            default:0,
            min:[0,"Special discount can not be negative"]
        },
        status:{
            type: String,
            required: [true,"Package status is required"],
            lowercase:true,
            enum: ["active","in-active","discontinued"],
            message:"Status can not be {VALUE}. Status must be 'active/in-active/discontinued'"
           
        },
        languages:[{
            type: String,
            required: true,
            validate: {
                validator: (value) =>{
                    return gttActiveLanguages.some(language => language.code === value);
                },
                message:"Invalid Language Code"
            }
        }],
        fileType:[{
            extension:{
                type: String,
                required: [true,"Audio extension is required"],
                trim: true
            },
            mime:{
                type: String,
                required: [true,"Audio mime is required"],
                trim: true
            },
        }],
        category:{
            type: String,
            lowercase:true,
            trim: true,
        },
        known_for:{
            type: String,
            lowercase:true,
            trim: true,
        }
    },
    {
        timestamps: true
    }
)

const PackageModel = mongoose.models.Packages || mongoose.model("Packages",packageSchema);

export default PackageModel;

