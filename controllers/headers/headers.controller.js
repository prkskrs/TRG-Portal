// Models
import Business from "../../models/headers/business.js";
import City from "../../models/headers/cities.js";
import Country from "../../models/headers/country.js";
import Department from "../../models/headers/department.js"
import InterviewRound from "../../models/headers/interviewRounds.js";
import QuestionBank from "../../models/headers/questionBank.js";
import Round from "../../models/headers/rounds.js";
import State from "../../models/headers/states.js";
import Profile from "../../models/headers/profile.js";
import Workshift from "../../models/headers/workShift.js";
import Worktype from "../../models/headers/workType.js";
import Compensation from "../../models/headers/compensation.js";

import { isEmpty } from "../../utils/isEmpty.js";
import bigPromise from "../../middlewares/bigPromise.js"


// Business Header

export const addBusiness = bigPromise(async (req, res, next) => {
    const { businessName, address, bussinessUrl, businessCode, summary, businessLogo, description, status } = req.body;

    if (!businessName || !address) {
        return res.status(400).json({
            success: false,
            message: "Business name and address is required."
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
        success: true,
        message: "Business Added Successfully!",
        business
    })
})

export const getAllBusiness = bigPromise(async (req, res, next) => {
    const allBusiness = await Business.find({})

    if (allBusiness.length === 0) {
        return res.status(501).json({
            success: false,
            message: "No Business Added ! "
        })
    }

    res.status(200).json({
        data: allBusiness
    })
})

export const updateBusinessById = bigPromise(async (req, res, next) => {

    console.log(isEmpty(req.body))
    if (isEmpty(req.body)) {
        return res.status(400).json({
            success: "false",
            message: "Nothing to update."
        })
    }

    const newData = {
        businessName: req.body.businessName,
        address: req.body.address,
        bussinessUrl: req.body.bussinessUrl,
        businessCode: req.body.businessCode,
        summary: req.body.summary,
        businessLogo: req.body.businessLogo,
        description: req.body.description,
        // status:req.body.status
    }
    const business = await Business.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        business
    })
})


// Cities Header

export const addCity = bigPromise(async (req, res, next) => {
    const { cityName, state, country, status } = req.body;

    if (!cityName || !state || !country) {

        return res.status(400).json({
            success: false,
            message: "City name, State and Country is required."
        })
    }

    const city = await City.create({
        cityName,
        state,
        country,
        status
    })

    res.status(200).json({
        success: true,
        message: "City Added Successfully!",
        city
    })
})

export const getAllCity = bigPromise(async (req, res, next) => {
    const allCity = await City.find({})

    if (allCity.length === 0) {
        return res.status(501).json({
            success: false,
            message: "No City Added ! "
        })
    }

    res.status(200).json({
        data: allCity
    })
})

export const updateCityById = bigPromise(async (req, res, next) => {

    console.log(isEmpty(req.body))
    if (isEmpty(req.body)) {
        return res.status(400).json({
            success: "false",
            message: "Nothing to update."
        })
    }

    const newData = {
        cityName: req.body.cityName,
        state: req.body.state,
        country: req.body.country,
    }
    const city = await City.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        city
    })
})

// Country Header

export const addCountry = bigPromise(async (req, res, next) => {
    const { countryName, code, status } = req.body;

    if (!countryName || !code) {

        return res.status(400).json({
            success: false,
            message: "Country name and Country Code is required."
        })
    }

    const country = await Country.create({
        countryName,
        code,
        status
    })

    res.status(200).json({
        success: true,
        message: "Country Added Successfully!",
        country
    })
})

export const getAllCountry = bigPromise(async (req, res, next) => {
    const allCountry = await Country.find({})

    if (allCountry.length === 0) {
        return res.status(501).json({
            success: false,
            message: "No Country Added ! "
        })
    }

    res.status(200).json({
        data: allCountry
    })
})

export const updateCountryById = bigPromise(async (req, res, next) => {

    // console.log(isEmpty(req.body))
    if (isEmpty(req.body)) {
        return res.status(400).json({
            success: "false",
            message: "Nothing to update."
        })
    }

    const newData = {
        countryName: req.body.countryName,
        code: req.body.code,
    }
    const country = await Country.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        country
    })
})


// Interview Round

export const addInterviewRound = bigPromise(async (req, res, next) => {
    const { profile, noOfRound, noOfQuestion } = req.body;

    if (!profile) {
        return res.status(400).json({
            success: false,
            message: "Profile is required."
        })
    }

    const ir = await InterviewRound.create({
        profile,
        noOfRound,
        noOfQuestion
    })

    res.status(200).json({
        success: true,
        message: "Interview Round Added Successfully!",
        ir
    })
})

export const getAllInterviewRound = bigPromise(async (req, res, next) => {
    const allInterviewRound = await InterviewRound.find({})

    if (allInterviewRound.length === 0) {
        return res.status(501).json({
            success: false,
            message: "No Interview Round Added ! "
        })
    }

    res.status(200).json({
        data: allInterviewRound
    })
})

export const updateInterviewRoundById = bigPromise(async (req, res, next) => {

    // console.log(isEmpty(req.body))
    if (isEmpty(req.body)) {
        return res.status(400).json({
            success: "false",
            message: "Nothing to update."
        })
    }

    const newData = {
        profile: req.body.profile,
        noOfRound: req.body.noOfRound,
        noOfQuestion: req.body.noOfQuestion
    }
    const ir = await InterviewRound.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        ir
    })
})

// Rounds Header
export const addRound = bigPromise(async (req, res, next) => {
    const { roundName } = req.body;

    if (!roundName) {
        return res.status(400).json({
            success: false,
            message: "Round name is required."
        })
    }

    const round = await Round.create({
        roundName
    })

    res.status(200).json({
        success: true,
        message: "Round Added Successfully!",
        round
    })
})


export const getAllRound = bigPromise(async (req, res, next) => {
    const allRound = await Round.find({})

    if (allRound.length === 0) {
        return res.status(501).json({
            success: false,
            message: "No Rounds Added ! "
        })
    }

    res.status(200).json({
        data: allRound
    })
})

export const updateRoundById = bigPromise(async (req, res, next) => {

    // console.log(isEmpty(req.body))
    if (isEmpty(req.body)) {
        return res.status(400).json({
            success: "false",
            message: "Nothing to update."
        })
    }

    const newData = {
        roundName: req.body.roundName
    }
    const round = await Round.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        round
    })
})


// State Header
export const addState = bigPromise(async (req, res, next) => {
    const { stateName, country, status } = req.body;

    if (!stateName || !country) {
        return res.status(400).json({
            success: false,
            message: "State Name and Country is required."
        })
    }

    const state = await State.create({
        stateName,
        country,
        status
    })

    res.status(200).json({
        success: true,
        message: "Round Added Successfully!",
        state
    })
})


export const getAllState = bigPromise(async (req, res, next) => {
    const allState = await State.find({})

    if (allState.length === 0) {
        return res.status(501).json({
            success: false,
            message: "No States Added ! "
        })
    }

    res.status(200).json({
        data: allState
    })
})

export const updateStateById = bigPromise(async (req, res, next) => {

    // console.log(isEmpty(req.body))
    if (isEmpty(req.body)) {
        return res.status(400).json({
            success: "false",
            message: "Nothing to update."
        })
    }

    const newData = {
        stateName: req.body.stateName,
        country: req.body.country
    }

    const state = await State.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        state
    })
})

// QuestionBank Header

export const addQuestionBank = bigPromise(async (req, res, next) => {
    const { departmentName, questionType, question, options, correctAnswer } = req.body;

    if (!departmentName) {

        return res.status(400).json({
            success: false,
            message: "Department name is required."
        })
    }

    const qb = await QuestionBank.create({
        departmentName,
        questionType,
        question,
        options,
        correctAnswer
    })

    res.status(200).json({
        success: true,
        message: "Question Bank Added Successfully!",
        qb
    })
})


export const getAllQuestionBank = bigPromise(async (req, res, next) => {
    const allQuestionBank = await QuestionBank.find({})

    if (allQuestionBank.length === 0) {
        return res.status(501).json({
            success: false,
            message: "No Question Bank Added ! "
        })
    }

    res.status(200).json({
        data: allQuestionBank
    })
})

export const updateQuestionBankById = bigPromise(async (req, res, next) => {

    // console.log(isEmpty(req.body))
    if (isEmpty(req.body)) {
        return res.status(400).json({
            success: "false",
            message: "Nothing to update."
        })
    }

    const newData = {
        departmentName: req.body.departmentName,
        questionType: req.body.questionType,
        question: req.body.question,
        options: req.body.options,
        correctAnswer: req.body.correctAnswer,
    }

    const qbank = await QuestionBank.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        qbank

    })
})


// Department Header 
export const addDepartment = bigPromise(async (req, res, next) => {
    const { title, description, status } = req.body;

    if (!title || !description) {

        return res.status(400).json({
            success: false,
            message: "Title and description of department is required."
        })
    }

    const dept = await Department.create({
        title,
        description,
        status
    })

    res.status(200).json({
        success: true,
        message: "Department Added Successfully!",
        dept
    })
})

export const getAllDepartment = bigPromise(async (req, res, next) => {
    const allDepartment = await Department.find({})

    if (allDepartment.length === 0) {
        return res.status(501).json({
            success: false,
            message: "No Department Added ! "
        })
    }

    res.status(200).json({
        data: allDepartment
    })
})


export const updateDepartmentById = bigPromise(async (req, res, next) => {

    // console.log(isEmpty(req.body))
    if (isEmpty(req.body)) {
        return res.status(400).json({
            success: "false",
            message: "Nothing to update."
        })
    }

    const newData = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }

    const dept = await Department.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        dept

    })
})

// Profile

export const addProfile = bigPromise(async (req, res, next) => {
    const { title, profileType, level, reportProfile, status } = req.body;

    if (!title || !profileType) {

        return res.status(400).json({
            success: false,
            message: "Title and ProfileType of profile is required."
        })
    }

    const profile = await Profile.create({
        title,
        profileType,
        level,
        reportProfile,
        status
    })

    res.status(200).json({
        success: true,
        message: "Profile Added Successfully!",
        profile
    })
})


export const getAllProfile = bigPromise(async (req, res, next) => {
    const allProfile = await Profile.find({}).catch(err => {
        console.log(`error gettign profile :: ${err}`)
        return null
    })

    if (allProfile === null) {
        return res.status(501).json({
            success: false,
            message: "No Profile Added ! "
        })
    }

   return res.status(200).json({
        data: allProfile
    })
})


export const updateProfileById = bigPromise(async (req, res, next) => {

    // console.log(isEmpty(req.body))
    if (isEmpty(req.body)) {
        return res.status(400).json({
            success: "false",
            message: "Nothing to update."
        })
    }

    const newData = {
        title: req.body.title,
        profileType: req.body.profileType,
        level: req.body.level,
        reportProfile: req.body.reportProfile,
        status: req.body.status
    }

    const profile = await Profile.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        profile
    })
})

// WorkShift

export const addWorkShift = bigPromise(async (req, res, next) => {
    const { title, status } = req.body;

    if (!title) {

        return res.status(400).json({
            success: false,
            message: "Title of work shift is required."
        })
    }

    const ws = await Workshift.create({
        title,
        status
    })

    res.status(200).json({
        success: true,
        message: "Work Shift Added Successfully!",
        ws
    })
})


export const getAllWorkShift = bigPromise(async (req, res, next) => {
    const allWorkShift = await Workshift.find({})

    if (allWorkShift.length === 0) {
        return res.status(501).json({
            success: false,
            message: "No WorkShift Added ! "
        })
    }

    res.status(200).json({
        data: allWorkShift
    })
})


export const updateWorkShiftById = bigPromise(async (req, res, next) => {

    // console.log(isEmpty(req.body))
    if (isEmpty(req.body)) {
        return res.status(400).json({
            success: "false",
            message: "Nothing to update."
        })
    }

    const newData = {
        title: req.body.title,
        status: req.body.status
    }

    const ws = await Workshift.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        ws
    })
})

// WorkType

export const addWorkType = bigPromise(async (req, res, next) => {
    const { title, status } = req.body;

    if (!title) {

        return res.status(400).json({
            success: false,
            message: "Title of work type is required."
        })
    }

    const wt = await Worktype.create({
        title,
        status
    })

    res.status(200).json({
        success: true,
        message: "Work Type Added Successfully!",
        wt
    })
})


export const getAllWorkType = bigPromise(async (req, res, next) => {
    const allWorkType = await Worktype.find({})

    if (allWorkType.length === 0) {
        return res.status(501).json({
            success: false,
            message: "No WorkType Added ! "
        })
    }

    res.status(200).json({
        data: allWorkType
    })
})


export const updateWorkTypeById = bigPromise(async (req, res, next) => {

    // console.log(isEmpty(req.body))
    if (isEmpty(req.body)) {
        return res.status(400).json({
            success: "false",
            message: "Nothing to update."
        })
    }

    const newData = {
        title: req.body.title,
        status: req.body.status
    }

    const wt = await Worktype.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        wt
    })
})


// Compensation

export const addCompensation = bigPromise(async (req, res, next) => {
    const { data, status } = req.body;

    if (!data) {

        return res.status(400).json({
            success: false,
            message: "data of compensation is required."
        })
    }

    const cs = await Compensation.create({
        data,
        status
    })

    res.status(200).json({
        success: true,
        message: "Compensation Added Successfully!",
        cs
    })
})


export const getAllCompensation = bigPromise(async (req, res, next) => {
    const allCompensation = await Compensation.find({})

    if (allCompensation.length === 0) {
        return res.status(501).json({
            success: false,
            message: "No Compensation Added ! "
        })
    }

    res.status(200).json({
        data: allCompensation
    })
})


export const updateCompensationById = bigPromise(async (req, res, next) => {

    // console.log(isEmpty(req.body))
    if (isEmpty(req.body)) {
        return res.status(400).json({
            success: "false",
            message: "Nothing to update."
        })
    }

    const newData = {
        data: req.body.data,
        status: req.body.status
    }

    const cs = await Compensation.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        cs
    })
})