import mongoose, { mongo } from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    decription:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.ObjectId,
        // linking category to product
        ref:'Category',
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    photo:{
        type:Buffer,
        contentType:String
    },
    shipping:{
        type:Boolean,
    }
},{timestamps:true}
);

export default mongoose.model("Products",ProductSchema);