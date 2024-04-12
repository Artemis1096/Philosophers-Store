import mongoose from 'mongoose'

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
    },
    slug:{
        // if name is category model then its slug will be category-model
        type:String,
        lowercase:true
    }
});

export default mongoose.model("Category",categorySchema);