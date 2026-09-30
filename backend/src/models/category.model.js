import mongoose from "mongoose";


const categoryScema = new mongoose,Schema(
    {
        name:{
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
    },
       {
        timestamps: true,
       }
);

const Category = mongoose.model("category",categoryScema);

export default Category;