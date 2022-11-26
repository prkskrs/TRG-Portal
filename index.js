import app from "./app.js"
import dotenv from "dotenv";
dotenv.config()
const PORT=process.env.PORT||8000
// import {connectDB} from "./config/db.js"

app.listen(PORT,()=>{
    console.log(`listening at port http://localhost:${PORT}`)
})