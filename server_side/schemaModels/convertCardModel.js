import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;


const ConvertCardSchema = new mongoose.Schema(
    {
        user_id:{
            type: ObjectId,
            ref:"Users",
            required: [true,"User reference is required"],
            unique:[true,"Duplicate convert card!"]
        },
        package_start: {
            type: Date,
            required: [true,"Purchase date is required"],
        },
        package_expire: {
            type: Date,
            required: [true,"Purchase date is required"],
        },
        card_status:{
            type: String,
            required:[true,"Card staus is required"],
            enum:{
                values: ['active','inactive','block'],
                message:"Card status can not be {VALUE}. It must be active/inactive/block"
            },
            default:'inactive'
        },
        character_limit:{
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
        req_per_day: {
            type: Number,
            required: [true,"Need request limit for each day"],
            default:0,
            min:[0,"Request limit can not be negative"]
        },

        size: { // during deleting this card after expire, add this size with file count to my special collection to keep record how much this tool has converted
            type: Number,
            required: [true,"File size is required"],
            min:[0,"File size  can not be negative"]
        },
        file_count:{ // keep this to kepp track how many file was created total and move it in special collection during deleting this card after expire
            type: Number,
            required: [true,"File count is required"],
            min:[0,"File count  can not be negative"]
        }
    },
    {
        timestamps: true
    }
)

const ConvertCardModel = mongoose.models.ConvertCard || mongoose.model("ConvertCard",ConvertCardSchema);

export default ConvertCardModel;

