import express from 'express'
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js'

dotenv.config();
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev')); // prints all the api calls done on console screen

// routes
app.use('/api/v1/auth',authRoute);

app.get('/',(req,res)=>{
    res.send({
        message:"welcome"
    })
})

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
}) 