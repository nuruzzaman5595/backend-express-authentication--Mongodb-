import mongoose from "mongoose";
import Product from "./product.model";  

const cartSchema = new mongoose.Schema(
    {
       user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
       },
       items:[
        {
            Product:{
                type:mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },

            quantity:{
                type: Number,
                default: 1,
            },
        },
       ],
    },
    {
        timestamps: true,
    },
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;