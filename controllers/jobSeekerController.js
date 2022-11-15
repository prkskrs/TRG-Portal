import bigPromise from "../middlewares/bigPromise.js"
import Jobseeker from "../models/Jobseeker.js";
import { cookieTokenJobseeker } from "../utils/cookieToken.js";
import { mailHelper } from "../utils/mailHelper.js";
import crypto from "crypto";


export const signUpJobSeeker=bigPromise(async(req,res,next)=>{
    const { name, email, password, address, phoneNumber, experience , education, 
        skills, bio, profile_img} = req.body;

    if(!name || !email || !password){
        return res.status(401).json({
            success:false,
            message:"name, email and password is required"
        })
    }

    const existingUser = await Jobseeker.findOne({email}).catch(err=>{
        console.log(`error finding jobseeker ${err}`);
    });

    console.log(existingUser)
    
    if(existingUser){
        return res.status(400).json({
            success:"false",
            message:"Jobseeker with this email already exists"
        })
    }

    const jobseeker = await Jobseeker.create({
        name, 
        email, 
        password, 
        address, 
        phoneNumber, 
        experience , 
        education, 
        skills, 
        bio, 
        profile_img
    }).catch(err=>{
        console.log(`error creating jobseeker ${err} `);
    })
    
    cookieTokenJobseeker(jobseeker,res,"Jobseeker registered successfully!")

})


export const loginJobSeeker=bigPromise(async(req,res,next)=>{
    const {email,password}=req.body;
    if(!(email && password)){
        return res.status(400).json({
            success:"false",
            message:"Email and Password fields are required."
        })
    }
    const jobseeker=await Jobseeker.findOne({email:email}).catch(err=>{
        console.log(`error finding jobseeker ${err}`);
    })

    if(!jobseeker){
        return res.status(400).json({
            success:"false",
            message:"You're not registered in our app"
        })
    }

    const isPasswordCorrect=await jobseeker.isValidatedPassword(password, jobseeker.password)

    if(!isPasswordCorrect){
        return res.status(401).json({
            success:"false",
            message:"Incorrect Password"
        })
    }
    cookieTokenJobseeker(jobseeker,res,"Loggined Successfully!");

})

export const logout=bigPromise(async(req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    
    res.status(200).json({
        success:true,
        message:"loggedOut Successfully"
    })
})

export const getLoggedInJobSeekerDetails=bigPromise(async(req,res,next)=>{
    const jobseeker =await Jobseeker.findById(req.user.id).catch(err=>{
        console.log(`error finding jobseeker details ${err}`);
        return null
    })
    jobseeker.password=undefined

    if(!jobseeker){
        return res.status(501).json({
            success:false,
            message:"Internal server error!"
        })
    }

    res.status(200).json({
        success:true,
        jobseeker
    })
})

