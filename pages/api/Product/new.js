import { Product } from "../../../model/product";
import { connectDB } from "../../../utils/database"


export default async(req , res)=>{

    if(req.method!=="POST"){
        res.status(404).json({
            success:false,
            message:`no API with ${req.method} method`
        })
    }
    else{
        await connectDB();

        const {price , name , category} = req.body;
        Product.create({
            name , price , category
        });
        const allproducts = await Product.find({});
        res.status(201).json({
            success:true,
            message:"product Created Successfully",
            allproducts
        })
    }
}