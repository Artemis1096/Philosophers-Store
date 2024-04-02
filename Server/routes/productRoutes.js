import express from 'express'
import {requireSignIn,isAdmin} from "../middleware/authMiddleware.js"
import { createProductController } from '../controller/productController.js';
import formidable from 'express-formidable'

const router = express.Router()

// routes
router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController);

export default router;