import mongoose from "mongoose";

export const connectDB = async ()=>{
    console.log('hello whatsup')
    try{
        const {connection} = await mongoose.connect("mongodb://localhost:27017" , {dbName: "nextjsdb"});
        console.log(`database connected on ${connection.host}`)
    }
    catch(error){
        console.log(error);
    }
}