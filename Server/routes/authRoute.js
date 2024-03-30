import express from 'express'
import {loginController, registerController} from '../controller/authController.js'

const router = express.Router()

// Register Route
router.post('/register',registerController)

// Login Route
router.post('/login',loginController)
export default router;