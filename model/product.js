import mongoose from "mongoose";

const schema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    
})

mongoose.models = {}

export const Product = mongoose.model("product" , schema);