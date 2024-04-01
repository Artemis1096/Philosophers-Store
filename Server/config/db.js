import mongoose from 'mongoose';

// DB connection
const connectDB= async ()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGO_URL)
        console.log("Database Connected")
    }
    catch(error){
        console.log(`Error occured :- ${error}`)
    }
};

export default connectDB;