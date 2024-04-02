import express from 'express'
import {isAdmin,requireSignIn} from "../middleware/authMiddleware.js"
import { createCategoryController, updateCategoryController, categoryController,singleCategoryController, deleteCategoryController } from '../controller/categoryController.js';

const router = express.Router()

// routes
router.post('/create-category',requireSignIn,isAdmin,createCategoryController);

// updates categories
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController);

// shows all categories
router.get('/get-category',categoryController);

// single category
router.get('/single-category/:slug',singleCategoryController);

// delete category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController);
export default router;