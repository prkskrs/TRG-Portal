import Jobseeker from "../models/Jobseeker.js";
import bigPromise from "./bigPromise.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

export const isLoggedIn=bigPromise(async(req,res,next)=>{
    const token=req.cookies.token
    // console.log(token)
    if(!token){
        return res.status(403).json({
            success:"false",
            message:"Login First to access this page"
        }) 
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET)
    // console.log(decode)

    req.user=await Jobseeker.findOne({_id:decode.id})
    return next()

})

// export const customRole=(...roles)=>{
//     return(req,res,next)=>{
//         if (!(req.user.role[0]==="admin")){
//             return res.status(403).json({
//                 success:false,
//                 message:"you're not allowed for this resource."
//             })
//         }
//         next()
//     }
// }