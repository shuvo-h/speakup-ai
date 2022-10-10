import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;


const PaymentSlipsSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: [true,"Amount is required"],
            min:[0,"Amount can not be negative"]
        },
        method:{
            type: String,
            required: [true,"Payment method is required"],
        },
        card:{
            type: String // initially not using
        },
        package: {
            purchase_at:{
                type: Date,
                required: [true,"Purchase date is required"],

            },
            expire_at:{
                type: Date,
                required: [true,"Purchase date is required"],

            },
            info:{
                type: ObjectId,
                ref:"Packages",
                required: [true,"Package reference is required"],
            }
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

const PaymentSlipsModel = mongoose.models.PaymentSlips || mongoose.model("PaymentSlips",PaymentSlipsSchema);

export default PaymentSlipsModel;

