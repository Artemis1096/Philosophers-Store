import productModel from '../models/productModel.js'
import categoryModel from '../models/categoryModel.js'
import fs from 'fs' //file system
import slugify from 'slugify'

export const createProductController = async (req,res)=>{
    try {
        const {name,slug,description,price,category,quantity,shipping}=req.fields
        const {photo} = req.files
        // Validation
        switch(true){
            case !name:
                return res.status(500).send({error:'Name is required'})
            case !description:
                return res.status(500).send({error:'Description is required'})
            case !price:
                return res.status(500).send({error:'Price is required'})
            case !category:
                return res.status(500).send({error:'Category is required'})
            case !quantity:
                return res.status(500).send({error:'Quantity is required'})
            case photo && photo.size>1000000:
                return res.status(500).send({error:'Photo is required'})
        }
        const products = new productModel({...req.fields,slug:slugify(name)})
        if(photo){
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;
        }
        await products.save();
        res.status(201).send({
            success:true,
            message:'Product Created Successfully',
            products
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Error in creating product'
        })
    }
}

export const getProductController = async (req,res)=> {
    try {
        const products=await productModel.find({}).populate('category').select("-photo").limit(12).sort({createdAt:-1}) //fetching products
        res.status(200).send({
            success:true,
            total:products.length,
            message:"All Products",
            products
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Error in getting product'
        }) 
    }
}


export const getSingleProductController = async (req,res)=> {
    try {
        const product = await productModel.findOne({slug:req.params.slug}).select('-photo').populate('category');
        res.status(200).send({
            success:true,
            message:"Single Product Fetched",
            product
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error while getting the product",
            error
        })
    }
}

export const productPhotoController = async (req,res)=> {
    try {
        const product = await productModel.findById(req.params.pid).select('photo')
        if(product.photo.data){
            // study this code 
            res.set('Content-type',product.photo.contentType);
            return res.status(200).send(product.photo.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error while getting the product photo",
            error
        })
    }
}


export const deleteProductController = async (req,res)=> {
    try {
        await productModel.findByIdAndDelete(req.params.pid).select('-photo')
        res.status(200).send({
            success:true,
            message:"Product deleted successfully"
            // this functionality is not tested
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error while deleting the product",
            error
        })       
    }
}


export const updateProductController = async (req,res)=> {
    try {   
        const {name,slug,description,price,category,quantity,shipping}=req.fields
        const {photo} = req.files
        // Validation
        switch(true){
            case !name:
                return res.status(500).send({error:'Name is required'})
            case !description:
                return res.status(500).send({error:'Description is required'})
            case !price:
                return res.status(500).send({error:'Price is required'})
            case !category:
                return res.status(500).send({error:'Category is required'})
            case !quantity:
                return res.status(500).send({error:'Quantity is required'})
            case photo && photo.size>1000000:
                return res.status(500).send({error:'Photo is required'})
        }
        const products = await productModel.findByIdAndUpdate(req.params.pid,{
            ...req.fields,slug:slugify(name)},{new:true}
            )
        if(photo){
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;
        }
        await products.save();
        res.status(201).send({
            success:true,
            message:'Product Updated Successfully',
            products
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error while updating the product",
            error
        })       
    }
}

export const productFilterController = async(req,res)=>{
    try{
        const {checked,radio} = req.body;
        let args={}
        if(checked.length > 0) args.category = checked 
        if(radio.length) args.price = {$gte : radio[0],$lte:radio[1]}       
        const products = await productModel.find(args);
        res.status(200).send({
            success:true,
            products
        })
    }
    catch(error){
        console.log(error);
        res.status(400).send({
            success:false,
            message:'Error while fetching products',
            error
        })
    }
}

export const productCountController = async(req,res)=>{
    try {
        const total = await productModel.find({}).estimatedDocumentCount();
        res.status(200).send({
            success:true,
            total
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success:false,
            message:'Error in product count',
            error
        })
    }
}

// Product List Controller
export const productListController = async(req,res)=>{
    try {
        const perPage = 3;
        const page = req.params.page?req.params.page:1
        const products = await productModel.find({}).select('-photo').skip((page-1)*perPage).limit(perPage).sort({createdAt:-1});
        res.status(200).send({
            success:true,
            products
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success:false,
            message:'Error in product showing product list',
            error
        })
    }
}

// Search Product
export const searchProductController = async (req,res) =>{
    try {
        const {keyword}=req.params;
        const result=await productModel.find({
            $or:[
                {name:{$regex:keyword,$options:"i"}},
                {description:{$regex:keyword,$options:"i"}}
            ]
        }).select('-photo');
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success:false,
            message:'Error in searching product',
            error
        })
    }
}

// Related Product Controller
export const relatedProductController = async(req,res)=>{
    try {
        const {pid,cid} = req.params
        const products = await productModel.find({
            category:cid,
            _id:{$ne:pid}
        }).select('-photo').limit(5).populate('category')
        res.status(200).send({
            success:true,
            products,
        })
    } catch (error) {
        console.log(error);
        res.send(400).send({
            success:false,
            message:'error while getting required products'
        })
    }
}

// Get product by category
export const productCategoryController = async(req,res)=>{
    try {
        const category = await categoryModel.findOne({slug:req.params.slug})
        const product = await productModel.find({category}).populate('category')
        res.status(200).send({
            success:true,
            category,
            product
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success:false,
            error,
            message:'Error while getting products'
        })
    }
}