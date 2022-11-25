import express  from "express"
import  dotenv  from "dotenv"
import connectDB from "./config/db.js"
import cors from "cors";


dotenv.config();
const app=express()
import cookieParser from "cookie-parser"

// cookies and filemiddleware
app.use(cookieParser())

// cors
app.use(cors())

// morgan middlewares
import morgan from "morgan"
app.use(morgan("tiny"))

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// import all routes here
import userRoutes from "./routes/userRoutes.js"
import headerRoutes from "./routes/headerRoutes.js"
import jobRoutes from "./routes/jobRoutes.js"
import jobSeekerRoutes from "./routes/jobSeekerRoutes.js"
import employeeRoutes from "./routes/employeeRoutes.js"

// router middleware
app.use("/api/v1",userRoutes);
app.use("/api/v1",headerRoutes);
app.use("/api/v1",jobRoutes);
app.use("/api/v1",jobSeekerRoutes);
app.use("/api/v1",employeeRoutes);


export default app;