import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    answer : {
        // used for resetting password
        type:String,
        required:true,
    },
    role:{
        // 0 role is for users and 1 role is admin
        type:Number,
        default:0
    }
},{timestamps:true})

export default mongoose.model('users',userSchema)