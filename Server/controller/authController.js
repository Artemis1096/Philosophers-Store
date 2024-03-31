import userModel from "../models/userModel.js";
import {comparePassword, hashPassword} from "../helpers/helper.js"
import JWT from "jsonwebtoken";

// for registration
export const registerController = async(req,res)=>{
    try {
        const {name,email,password,phone,address}=req.body

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

        // if the user with same data exits
        const userExists = await userModel.findOne({email})
        if(userExists){
            return res.status(200).send({
                success:false,
                message:"Already Registered please login"
            })
        }
        
        const hashedPassword = await hashPassword(password)
        const user =await new userModel({name,email,phone,address,password:hashedPassword}).save();

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
        // token
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.status(200).send({
            success:true,
            message:'login successfully',
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
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
        //check 
        const user = await userModel.findOne({email,answer})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'wrong email or answer'
            })
        }
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

// test controller
export const testController = (req,res) =>{
    console.log("protected route")
}