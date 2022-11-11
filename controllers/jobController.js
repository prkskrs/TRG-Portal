import bigPromise from "../middlewares/bigPromise.js";
import Job from "../models/Job.js";
import {isEmpty} from  "../utils/isEmpty.js"

export const addJob = bigPromise(async(req,res,next)=>{
    const {opportunityId,businessName,location,headcount, 
        approver_1,approver_2,approver_3,approver_4,
        departmentId, businessId, cityId, countryId, interviewRoundId,
        questionBankId, roundId, stateId, profileId, workShiftId, workTypeId, compensationId, createdBy
    } = req.body;

    if ( !businessName ||!location){
        return res.status(400).json({
            success:false,
            message:"opportunityId, businessName and location of Job is required."
        })
    }

    const job = await Job.create({
        opportunityId,businessName,location,headcount, 
        approver_1,approver_2,approver_3,approver_4,
        departmentId, businessId, cityId, countryId, interviewRoundId,
        questionBankId, roundId, stateId, profileId, workShiftId, workTypeId, compensationId, createdBy
    })

    res.status(201).json({
        success:true,
        message:"Job Added Successfully !",
        data : job
    })


})

export const getAllJobs = bigPromise(async(req,res,next)=>{
    const allJobs = await Job.find({})

    if(allJobs.length===0){
        return res.status(501).json({
            success:false,
            message:"No Jobs Added ! "
        })
    }

    res.status(200).json({
        success:true,
        data : allJobs
    })
})



export const updateJobById = bigPromise(async(req,res,next)=>{

    // console.log(isEmpty(req.body))
    if(isEmpty(req.body)) {
        return res.status(400).json({
            success:"false",
            message:"Nothing to update."
        })
    }
    
    const newData={
        opportunityId : req.body.opportunityId,
        businessName : req.body.businessName,
        location : req.body.location,
        headcount : req.body.headcount, 
        approver_1 : req.body.approver_1,
        approver_2 : req.body.approver_2,
        approver_3 : req.body.approver_3,
        approver_4 : req.body.approver_4,
        departmentId : req.body.departmentId,
        businessId : req.body.businessId,
        cityId : req.body.cityId,
        countryId : req.body.countryId,
        interviewRoundId : req.body.interviewRoundId,
        questionBankId : req.body.questionBankId,
        roundId : req.body.roundId,
        stateId : req.body.stateId,
        profileId : req.body.profileId,
        workShiftId : req.body.workShiftId,
        workTypeId : req.body.workTypeId,
        compensationId : req.body.compensationId,
        createdBy : req.body.createdBy
    }

    const job = await Job.findByIdAndUpdate(req.params.id,newData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        date:job
    })
})

export const deletedJobById = bigPromise(async(req,res,next)=>{

    const job= await Job.findById(req.params.id)

    // console.log(job)
    if(!job){
        return res.status(501).json({
            success:false,
            message:"No job found with this id "
        })
    }
    await job.remove()
    res.status(200).json({
        success:true,
        message:"Job Deleted Succesfully!",
        deletedJob:job
    })
})