import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;


const ConvertHistorySchema = new mongoose.Schema(
    {
        characters: {
            type: Number,
            required: [true,"Character number is required"],
            min:[0,"Character number can not be negative"]
        },
        user: {
            email:{
                type: String,
                required: [true,"User email is required"],
                unique:[true,"Email already exist"],
                trim: true,
                match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,"Invalid email address"],
                lowercase:true,
            },
            info:{
                type: ObjectId,
                ref:"Users",
                required: [true,"User reference is required"],
            }
        },
        
    },
    {
        timestamps: true
    }
)

const ConvertHistoryModel = mongoose.models.ConvertHistory || mongoose.model("ConvertHistory",ConvertHistorySchema);

export default ConvertHistoryModel;

