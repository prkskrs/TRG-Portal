import Business from "../../models/headers/business.js";
import City from "../../models/headers/cities.js";
import Country from "../../models/headers/country.js";
// import Department from "../../models/headers/department.js"
import InterviewRounds from "../../models/headers/interviewRounds.js";
import QuestionBank from "../../models/headers/questionBank.js";
import Round from "../../models/headers/rounds.js";
import State from "../../models/headers/states.js";

import bigPromise from "../../middlewares/bigPromise.js"

export const addBusiness = bigPromise(async(req,res,next)=>{
    const {businessName,address,bussinessUrl,businessCode,summary,businessLogo,description,status}=req.body;
    
    if (!businessName || !address){
        return res.status(400).json({
            success:false,
            message:"Business name and address is required."
        })
    }

    const business = await Business.create({
        businessName,
        address,
        bussinessUrl,
        businessCode,
        summary,
        businessLogo,
        description,
        status

    })

    res.status(200).json({
        success:true,
        message:"Business Added Successfully!",
        business
    })
})

export const getAllBusiness = bigPromise(async(req,res,next)=>{
    const allBusiness = await Business.find({})

    if(allBusiness.length===0){
        return res.status(501).json({
            success:false,
            message:"No Business Added! "
        })
    }

    // console.log(allBusiness.length)

    res.status(200).json({
        data:allBusiness
    })
})


export const deleteBusinessById = bigPromise(async(req,res,next)=>{

    const business = await Business.findById(req.params.id)

    if(!business){
        res.status(400).json({
            success:false,
            message:"No Business exist!"
        })
    }
    console.log(business)

    await business.remove()


    console.log(business)
    res.status(200).json({
        success:true,
        message:"Business deleted successfully !"
    })
})
