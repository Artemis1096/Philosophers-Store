import productModel from '../models/productModel.js'
import fs from 'fs' //file system

export const createProductController = async (req,res)=>{
    try {
        const {name,slug,decription,price,category,quantity,shipping}=req.fields
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Error in creating product'
        })
    }
}