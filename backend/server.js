// src/index.js
import express from 'express'; // Use import instead of require
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import connectDB from './config/db.js';
import userRouter from './routes/authRoutes.js';

const app = express();

app.use(express.json())
app.use(cors({
    origin: "*"
}))
connectDB()

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello, this is my backend app using ES Modules!');
});

app.use("/api/auth", userRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
