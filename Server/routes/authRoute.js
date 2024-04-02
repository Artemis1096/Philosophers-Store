import express from 'express'
import {testController,loginController, registerController, forgotPasswordController} from '../controller/authController.js'
import { requireSignIn } from '../middleware/authMiddleware.js'
import { isAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()

// Register Route
router.post('/register',registerController)

// Login Route
router.post('/login',loginController)

<<<<<<< HEAD
//Forgot Password || POST
router.post('/forgot-password',forgotPasswordController )



router.get('/test',requireSignIn,isAdmin,testController);

//protected route auth 
router.get('/user-auth', requireSignIn, (req,res) =>
{
    res.status(200).send({ok:true});
})
=======
//Forgot Password
router.post('/forgot-password',forgotPasswordController )

// router.get('/test',requireSignIn,isAdmin,testController);

//protected routes
router.get('/user-auth', requireSignIn, (req,res) =>
{
    // for user
    res.status(200).send({ok:true});
})
router.get('/admin-auth', requireSignIn,isAdmin, (req,res) =>
{
    // for admin
    res.status(200).send({ok:true});
})

>>>>>>> jashan
export default router;