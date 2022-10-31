import Business from "../../models/headers/business.js";
import City from "../../models/headers/cities.js";
import Country from "../../models/headers/country.js";
// import Department from "../../models/headers/department.js"
import InterviewRound from "../../models/headers/interviewRounds.js";
import QuestionBank from "../../models/headers/questionBank.js";
import Round from "../../models/headers/rounds.js";
import State from "../../models/headers/states.js";
import {isEmpty} from "../../utils/isEmpty.js";

import bigPromise from "../../middlewares/bigPromise.js"

// Business Header

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
            message:"No Business Added ! "
        })
    }

    res.status(200).json({
        data:allBusiness
    })
})

export const updateBusinessById = bigPromise(async(req,res,next)=>{

    console.log(isEmpty(req.body))
    if(isEmpty(req.body)) {
        return res.status(400).json({
            success:"false",
            message:"Nothing to update."
        })
    }
    
    const newData={
        businessName:req.body.businessName,
        address:req.body.address,
        bussinessUrl:req.body.bussinessUrl,
        businessCode:req.body.businessCode,
        summary:req.body.summary,
        businessLogo:req.body.businessLogo,
        description:req.body.description,
        // status:req.body.status
    }
    const business= await Business.findByIdAndUpdate(req.params.id,newData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        business
    })
})


// Cities Header

export const addCity = bigPromise(async(req,res,next)=>{
    const {cityName,state,country,status}=req.body;
    
    if (!cityName || !state || !country){

        return res.status(400).json({
            success:false,
            message:"City name, State and Country is required."
        })
    }

    const city = await City.create({
        cityName,
        state,
        country,
        status
    })

    res.status(200).json({
        success:true,
        message:"City Added Successfully!",
        city
    })
})

export const getAllCity = bigPromise(async(req,res,next)=>{
    const allCity = await City.find({})

    if(allCity.length===0){
        return res.status(501).json({
            success:false,
            message:"No City Added ! "
        })
    }

    res.status(200).json({
        data:allCity
    })
})

export const updateCityById = bigPromise(async(req,res,next)=>{

    console.log(isEmpty(req.body))
    if(isEmpty(req.body)) {
        return res.status(400).json({
            success:"false",
            message:"Nothing to update."
        })
    }
    
    const newData={
        cityName:req.body.cityName,
        state:req.body.state,
        country:req.body.country,
    }
    const city= await City.findByIdAndUpdate(req.params.id,newData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        city
    })
})

// Country Header

export const addCountry = bigPromise(async(req,res,next)=>{
    const {countryName,code,status}=req.body;
    
    if (!countryName || !code){

        return res.status(400).json({
            success:false,
            message:"Country name and Country Code is required."
        })
    }

    const country = await Country.create({
        countryName,
        code,
        status
    })

    res.status(200).json({
        success:true,
        message:"Country Added Successfully!",
        country
    })
})

export const getAllCountry = bigPromise(async(req,res,next)=>{
    const allCountry = await Country.find({})

    if(allCountry.length===0){
        return res.status(501).json({
            success:false,
            message:"No Country Added ! "
        })
    }

    res.status(200).json({
        data : allCountry
    })
})

export const updateCountryById = bigPromise(async(req,res,next)=>{

    // console.log(isEmpty(req.body))
    if(isEmpty(req.body)) {
        return res.status(400).json({
            success:"false",
            message:"Nothing to update."
        })
    }
    
    const newData={
        countryName:req.body.countryName,
        code:req.body.code,
    }
    const country= await Country.findByIdAndUpdate(req.params.id,newData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        country
    })
})


// Interview Round

export const addInterviewRound = bigPromise(async(req,res,next)=>{
    const {profile,noOfRound,noOfQuestion}=req.body;
    
    if (!profile){
        return res.status(400).json({
            success:false,
            message:"Profile is required."
        })
    }

    const ir = await InterviewRound.create({
        profile,
        noOfRound,
        noOfQuestion
    })

    res.status(200).json({
        success:true,
        message:"Interview Round Added Successfully!",
        ir
    })
})

export const getAllInterviewRound = bigPromise(async(req,res,next)=>{
    const allInterviewRound = await InterviewRound.find({})

    if(allInterviewRound.length===0){
        return res.status(501).json({
            success:false,
            message:"No Interview Round Added ! "
        })
    }

    res.status(200).json({
        data : allInterviewRound
    })
})

export const updateInterviewRoundById = bigPromise(async(req,res,next)=>{

    // console.log(isEmpty(req.body))
    if(isEmpty(req.body)) {
        return res.status(400).json({
            success:"false",
            message:"Nothing to update."
        })
    }
    
    const newData={
        profile:req.body.profile,
        noOfRound:req.body.noOfRound,
        noOfQuestion:req.body.noOfQuestion
    }
    const ir= await InterviewRound.findByIdAndUpdate(req.params.id,newData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        ir
    })
})

// Rounds Header
export const addRound = bigPromise(async(req,res,next)=>{
    const {roundName}=req.body;
    
    if (!roundName){
        return res.status(400).json({
            success:false,
            message:"Round name is required."
        })
    }

    const round = await Round.create({
        roundName
    })

    res.status(200).json({
        success:true,
        message:"Round Added Successfully!",
        round
    })
})


export const getAllRound = bigPromise(async(req,res,next)=>{
    const allRound = await Round.find({})

    if(allRound.length===0){
        return res.status(501).json({
            success:false,
            message:"No Rounds Added ! "
        })
    }

    res.status(200).json({
        data : allRound
    })
})

export const updateRoundById = bigPromise(async(req,res,next)=>{

    // console.log(isEmpty(req.body))
    if(isEmpty(req.body)) {
        return res.status(400).json({
            success:"false",
            message:"Nothing to update."
        })
    }
    
    const newData={
        roundName:req.body.roundName
    }
    const round= await Round.findByIdAndUpdate(req.params.id,newData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        round
    })
})


// State Header
export const addState = bigPromise(async(req,res,next)=>{
    const {stateName, country, status}=req.body;
    
    if (!stateName || !country){
        return res.status(400).json({
            success:false,
            message:"State Name and Country is required."
        })
    }

    const state = await State.create({
        stateName,
        country,
        status
    })

    res.status(200).json({
        success:true,
        message:"Round Added Successfully!",
        state
    })
})


export const getAllState = bigPromise(async(req,res,next)=>{
    const allState = await State.find({})

    if(allState.length===0){
        return res.status(501).json({
            success:false,
            message:"No States Added ! "
        })
    }

    res.status(200).json({
        data : allState
    })
})

export const updateStateById = bigPromise(async(req,res,next)=>{

    // console.log(isEmpty(req.body))
    if(isEmpty(req.body)) {
        return res.status(400).json({
            success:"false",
            message:"Nothing to update."
        })
    }
    
    const newData={
        stateName:req.body.stateName,
        country:req.body.country
    }
    const state= await State.findByIdAndUpdate(req.params.id,newData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        state
    })
})