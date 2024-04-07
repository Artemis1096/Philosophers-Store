import express from 'express'
import {requireSignIn,isAdmin} from "../middleware/authMiddleware.js"
import { braintreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFilterController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from '../controller/productController.js';
import formidable from 'express-formidable'

const router = express.Router()

// routes
router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController);

// get products
router.get('/get-product',getProductController);

// single product
router.get('/get-product/:slug',getSingleProductController);

// get photo
router.get('/product-photo/:pid',productPhotoController);

// delete product
router.delete('/delete-product/:pid',deleteProductController)

// update product
router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateProductController);

// filter
router.post('/product-filters',productFilterController);

// product count
router.get('/product-count',productCountController);

// product per page
router.get('/product-list/:page',productListController);

// search product
router.get('/search/:keyword',searchProductController);

// similar products
router.get('/related-product/:pid/:cid',relatedProductController);

// category wise get products
router.get('/product-category/:slug',productCategoryController);

// Payments route
// token 
router.get('/braintree/token',braintreeTokenController);

// payments
router.post('/braintree/payment',requireSignIn,braintreePaymentController);
// pid -> product id
export default router;