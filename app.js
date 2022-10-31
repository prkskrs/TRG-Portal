import express  from "express"
import  dotenv  from "dotenv"
import connectDB from "./config/db.js"
dotenv.config();
const app=express()
import cookieParser from "cookie-parser"

//cookies and filemiddleware
app.use(cookieParser())


// morgan middlewares
import morgan from "morgan"
app.use(morgan("tiny"))

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// import all routes here
import userRoutes from "./routes/userRoutes.js"
import headerRoutes from "./routes/headerRoutes.js"

// router middleware
app.use("/api/v1",userRoutes);
app.use("/api/v1",headerRoutes);


export default app;