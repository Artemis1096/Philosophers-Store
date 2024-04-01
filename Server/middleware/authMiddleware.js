import JWT from "jsonwebtoken"
import userModel from "../models/userModel.js";

// Protecting routes using jwt
export const requireSignIn=async (req,res,next) => {
    try {
        // token is stored in req.headers.authorization
        const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
        // decode decides if the user is able to access the page or not
        req.user=decode;
        next();
    } catch (error) {
        console.log(error)
    }
}

// admin access
export const isAdmin =async (req,res,next)=>{
    try{
        const user = await userModel.findById(req.user._id);
        if(!user.role!==1){ //as role 1 is assigned to admin and 0 is assigned to users
            return res.status(401).send({
                success:false,
                message:"Unauthorized Access"
            })
        }else{
            next();
        }
    }
    catch(error){
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message:"Error in admin middleware"
        })
    }
}