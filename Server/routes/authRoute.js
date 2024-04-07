import express from 'express'
import {loginController, registerController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from '../controller/authController.js'
import { requireSignIn } from '../middleware/authMiddleware.js'
import { isAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()

// Register Route
router.post('/register',registerController)

// Login Route
router.post('/login',loginController)

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

// update profile
router.put('/profile',requireSignIn,updateProfileController);

// orders
router.get('/orders',requireSignIn,getOrdersController);

// All orders
router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController);

// order status update
router.put('/order-status/:orderId',requireSignIn,isAdmin,orderStatusController)

export default router;