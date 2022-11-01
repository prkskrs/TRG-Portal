import express from "express"
const router = express.Router()

// import controller 
import { addBusiness, addCity, addCountry, addInterviewRound, addRound, getAllBusiness, getAllCity, getAllCountry, getAllInterviewRound, getAllRound, updateBusinessById, updateCityById, updateCountryById, updateInterviewRoundById, updateRoundById, addState, getAllState, updateStateById, addQuestionBank, getAllQuestionBank, updateQuestionBankById, addDepartment, getAllDepartment, updateDepartmentById } from "../controllers/headers/headers.controller.js"
// import userMiddlewares
// import {isLoggedIn,customRole} from "../middlewares/userMiddlewares.js"

// Business Header
router.route("/addBusiness").post(addBusiness)
router.route("/getAllBusiness").get(getAllBusiness)
router.route("/updateBusinessById/:id").put(updateBusinessById)

// City Header
router.route("/addCity").post(addCity)
router.route("/getAllCity").get(getAllCity)
router.route("/updateCityById/:id").put(updateCityById)

// Country Header
router.route("/addCountry").post(addCountry)
router.route("/getAllCountry").get(getAllCountry)
router.route("/updateCountryById/:id").put(updateCountryById)

// Interview Round Header
router.route("/addInterviewRound").post(addInterviewRound)
router.route("/getAllInterviewRound").get(getAllInterviewRound)
router.route("/updateInterviewRoundById/:id").put(updateInterviewRoundById)

// Round Header
router.route("/addRound").post(addRound)
router.route("/getAllRound").get(getAllRound)
router.route("/updateRoundById/:id").put(updateRoundById)

// State Header
router.route("/addState").post(addState)
router.route("/getAllState").get(getAllState)
router.route("/updateStateById/:id").put(updateStateById)

// Question Bank Header
router.route("/addQuestionBank").post(addQuestionBank)
router.route("/getAllQuestionBank").get(getAllQuestionBank)
router.route("/updateQuestionBankById/:id").put(updateQuestionBankById)

// Department Header
router.route("/addDepartment").post(addDepartment)
router.route("/getAllDepartment").get(getAllDepartment)
router.route("/updateDepartmentById/:id").put(updateDepartmentById)

export default router;