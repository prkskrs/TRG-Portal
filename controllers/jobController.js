import bigPromise from "../middlewares/bigPromise.js";
import Job from "../models/Job.js";
import Profile from "../models/headers/profile.js"
import City from "../models/headers/cities.js"
import Business from "../models/headers/business.js"
import User from "../models/User.js"

import { isEmpty } from "../utils/isEmpty.js"



const getDetails = async (job) => {
    const [data1, data2, data3, data4] = await Promise.all([
        Profile.findById(job.profileId).lean().catch(err => {
            console.log(`error getting profile with id :: ${job.profileId} :: ${err}`)
            return null
        }),
        Business.findById(job.businessId).lean().catch(err => {
            console.log(`error getting Business with id :: ${job.businessId} :: ${err}`)
            return null
        }),
        City.findById(job.cityId).lean().catch(err => {
            console.log(`error getting Business with id :: ${job.businessId} :: ${err}`)
            return null
        }),
        User.findById(job?.createdBy).lean().catch(err => {
            console.log(`error getting User with id :: ${job.createdBy} :: ${err}`)
            return null
        })
    ])
    return { data1, data2, data3, data4 }
}


export const addJob = bigPromise(async (req, res, next) => {
    const { opportunityId, numberOfOpenings, headcount, departmentId, businessId, cityId, countryId, interviewRoundId,
        questionBankId, roundId, stateId, profileId, workShiftId, workTypeId, compensationId, createdBy
    } = req.body;

    if (!businessId || !cityId) {
        return res.status(400).json({
            success: false,
            message: "Bad Request"
        })
    }

    const job = await Job.create({
        opportunityId, numberOfOpenings, headcount, departmentId, businessId, cityId, countryId, interviewRoundId,
        questionBankId, roundId, stateId, profileId, workShiftId, workTypeId, compensationId, createdBy
    }).catch(err => {
        console.log(`error creating jobs :: ${err}`)
        return null
    })

    if(job===null){
        return res.status(501).json({
            success: false,
            message: "Internal server error",
        })
    }

    res.status(201).json({
        success: true,
        message: "Job Added Successfully !",
        data: job
    })
})

export const getAllJobs = bigPromise(async (req, res, next) => {
    const allJobs = await Job.find({}).lean().catch(err => {
        console.log(`error getting jobs :: ${err}`)
        return null
    })

    if (allJobs === null) {
        return res.status(501).json({
            success: false,
            message: "Internal server error!"
        })
    }

    for (var j of allJobs) {
        const { data1, data2, data3, data4 } = await getDetails(j)
        j.profileName = data1?.title
        j.businessName = data2?.name
        j.cityName = data3?.name
        j.userName = data4?.name
    }

    res.status(201).json({
        success: true,
        data: allJobs
    })
})



export const updateJobById = bigPromise(async (req, res, next) => {

    // console.log(isEmpty(req.body))
    if (isEmpty(req.body)) {
        return res.status(400).json({
            success: "false",
            message: "Nothing to update."
        })
    }

    const newData = {
        opportunityId: req.body.opportunityId,
        businessName: req.body.businessName,
        location: req.body.location,
        headcount: req.body.headcount,
        approver_1: req.body.approver_1,
        approver_2: req.body.approver_2,
        approver_3: req.body.approver_3,
        approver_4: req.body.approver_4,
        departmentId: req.body.departmentId,
        businessId: req.body.businessId,
        cityId: req.body.cityId,
        countryId: req.body.countryId,
        interviewRoundId: req.body.interviewRoundId,
        questionBankId: req.body.questionBankId,
        roundId: req.body.roundId,
        stateId: req.body.stateId,
        profileId: req.body.profileId,
        workShiftId: req.body.workShiftId,
        workTypeId: req.body.workTypeId,
        compensationId: req.body.compensationId,
        createdBy: req.body.createdBy
    }

    const job = await Job.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    }).catch(err=>{
        console.log(`error updating job :: ${err}`);
        return null
    })

    if(job===null){
        return res.status(501).json({
            success:false,
            message:"Internal Server error"
        })
    }

    res.status(201).json({
        success: true,
        date: job
    })
})

export const deletedJobById = bigPromise(async (req, res, next) => {

    const job = await Job.findById(req.params.id).catch(err=>{
        console.log(`error finding job :: ${err}`);
        return null
    })

    if(job===null){
        return res.status(501).json({
            success:false,
            message:"Internal Server error"
        })
    }

    await job.remove()
    res.status(201).json({
        success: true,
        message: "Job Deleted Succesfully!",
        deletedJob: job
    })
})



export const getJobById = bigPromise(async (req, res, next) => {

    const { id } = req.params


    let job = await Job.findById(req.params.id).catch(err => {
        console.log(`error getting job by id :: ${id} :: ${err}`)
        return null;
    })

    if (!job) {
        return res.status(501).json({
            success: false,
            mesage: "Internal Server Error"
        })
    }


    const [data1, data2, data3, data4] = await Promise.all([
        Profile.findById(job.profileId).catch(err => {
            console.log(`error getting profile with id :: ${job.profileId} :: ${err}`)
            return null
        }),
        Business.findById(job.businessId).catch(err => {
            console.log(`error getting Business with id :: ${job.businessId} :: ${err}`)
            return null
        }),
        City.findById(job.cityId).catch(err => {
            console.log(`error getting Business with id :: ${job.businessId} :: ${err}`)
            return null
        }),
        User.findById(job?.createdBy).catch(err => {
            console.log(`error getting User with id :: ${job.createdBy} :: ${err}`)
            return null
        })
    ])


    res.status(201).json({
        success: true,
        data: {
            job: job,
            profileName: data1?.title,
            businessName: data2?.name,
            cityName: data3?.name,
            userName: data4?.name,
        }
    })
})