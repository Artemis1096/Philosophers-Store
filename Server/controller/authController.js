import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js"
import {comparePassword, hashPassword} from "../helpers/helper.js"
import JWT from "jsonwebtoken";

// for registration
export const registerController = async(req,res)=>{
    try {
        const {name,email,password,phone,address,answer}=req.body

        // validation 
        if(!name){
            return res.send({message:"Name is Required"})
        }
        if(!email){
            return res.send({message:"Email is Required"})
        }
        if(!password){
            return res.send({message:"Password is Required"})
        }
        if(!phone){
            return res.send({message:"Phone is Required"})
        }
        if(!address){
            return res.send({message:"Address is Required"})
        }
        if(!answer){
            return res.send({message:"Answer is Required"})
        }


        // if the user with same data exits
        const userExists = await userModel.findOne({email})
        if(userExists){
            return res.status(200).send({
                success:false,
                message:"Already Registered please login"
            })
        }
        
        const hashedPassword = await hashPassword(password)
        const user =await new userModel({name,email,phone,address,password:hashedPassword, answer}).save();

        res.status(201).send({
            success:true,
            message:"User Registered Successfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in registration',
            error
        })
    }
};

// for login
export const loginController = async (req,res)=>{
    try {
        const {email,password} = req.body

        // validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"Invalid Email or Password"
            })
        }
        // check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registered"
            })
        }
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            })
        }
        // JWT token
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.status(200).send({
            success:true,
            message:'login successfully',
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role:user.role
            },
            token,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }   
}
//forgotPasswordController
export const forgotPasswordController = async (req,res) => {
    try {
        const {email , answer , newPassword}= req.body
        if(!email){
            res.status(400).send({message:'Email is required'})
        }
        if(!answer){
            res.status(400).send({message:'answer is required'})
        }
        if(!newPassword){
            res.status(400).send({message:' newpassword is required'})
        }
        //check if user exists in database
        const user = await userModel.findOne({email,answer})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'wrong email or answer'
            })
        }
        // hashing the password
        const hashed = await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id,{password:hashed});
        res.status(200).send({
            success:true,
            message: "password reset successfully",
        })
    }
     catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'something went wrong',
            error
        })
    }
};

// Update Profile Controller
export const updateProfileController = async(req,res)=>{
    try {
        const {name,email,password,address,phone}=req.body;
        const user = await userModel.findById(req.user._id);

        // password change conditions
        if(password && password.length<6){
            return res.json({error:'Password is required and its length should be greater than 6'});
        }

        const hashedPassword = password ? await hashPassword(password): undefined;
        const updatedUser = await userModel.findByIdAndUpdate(req.user._id,{
            name:name || user.name, // if name is found then it gets updated else nothing changes
            password:hashedPassword || user.password,
            phone:phone || user.phone,
            address:address || user.address
        },{new:true}) 
        res.status(200).send({
            success:true,
            message:'Profile Successfully Updated',
            updatedUser
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success:false,
            message:'error while updating profile',
            error
        })
    }
}

// Get Orders
export const getOrdersController = async(req,res)=>{
    try {
        // gets all orders details from database 
        // it is used in admin dashboard
        const orders = await orderModel
          .find({ buyer: req.user._id })
          .populate("products", "-photo")
          .populate("buyer", "name");
        res.json(orders);
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error WHile Geting Orders",
          error,
        });
      }
}

// Get Orders admin
export const getAllOrdersController = async (req, res) => {
    try {
        // finds all orders of a particular user 
      const orders = await orderModel
        .find({})
        .populate("products", "-photo")
        .populate("buyer", "name")
        .sort({"createdAt":-1});
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error While Geting Orders",
        error,
      });
    }
  };

// Order Status Controller
export const orderStatusController = async(req,res)=>{
    try {
        // gets order id from req params and updated status from req body
        const {orderId}=req.params;
        const {status}=req.body
        const orders = await orderModel.findByIdAndUpdate(orderId,{status},{new:true})
        res.json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error while updating order',
            error
        })
    }
}
