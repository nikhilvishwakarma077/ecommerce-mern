// src/index.js
import express from 'express'; // Use import instead of require
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import connectDB from './config/db.js';
import userRouter from './routes/authRoutes.js';
import productRouter from './routes/productRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';

const app = express();


const corsOptions = {
    origin: 'http://localhost:5173', // Explicitly allowed origin
    credentials: true, // Allow the browser to send cookies/credentials
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}
app.use(express.json())
app.use(cors(corsOptions))
connectDB()

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello, this is my backend app using ES Modules!');
});

app.use("/api/auth", userRouter)
app.use("/api/product", productRouter)
app.use("/api/cart/", cartRouter)
app.use("/api/orders", orderRouter)

app.use(errorHandler);
 

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
