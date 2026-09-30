import mongoose  from "mongoose";

const productSchema = new mongoose.Schema(
     {
        name:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
     },
       price:{
            type: Number,
            required: true,
       },
       stock:{
           type:Number,
           default: 0,
       },
       category:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
       },
       user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
       },
       {
         timestamps:true,
       }
);

const Product = mongoose.model("product", productSchema);

export default Product;