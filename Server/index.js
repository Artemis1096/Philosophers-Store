import express from 'express'
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js'
import bodyparser from "body-parser"
import cors from 'cors'
import categoryRoutes from './routes/categoryRoute.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config();
connectDB();

const app = express()
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);

app.get('/',(req,res)=>{
    res.send({
        message:"welcome"
    })
})

// PORT
const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
}) 