import mongoose, { Types } from "mongoose";
import Product from "./product.model";

const orderScema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.type.objectId,
            ref:"User",
            requuired: true,
        },
        orderitems:[
            {
                Product:{
                    type: mongoose.Schema.Types.objectId,
                    ref: "product",
                },
                quantity:{
                    type: Number,
                    requuired: true,
                },

                price:{
                    type: Number,
                    requuired: true,
                },

            },
        ],
        shipingAddress:{
            sddress: String,
            city: String,
            postcalCode: String,
            counttry: String,
        },
        paymentMethod:{
            type:String,
            default: "COD"
        },
        totlaPrice:{
            Type: Number,
            required: true,
        },
        status:{
            type: String,
            enum: ["pending", "processing", "shipped", "delivered"],
            default: "pending",
        },  
    },
    {
        timestamps: true,
    }
    
);


const Order = mongoose.model("Order", orderScema);

export default Order;