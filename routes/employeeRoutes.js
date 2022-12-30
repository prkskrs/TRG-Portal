import express from "express"
const router = express.Router()

// import controller 
import { addEmployee,getAllEmployee, getEmployeeById, updateEmployeeById } from "../controllers/employeeController.js"

// import userMiddlewares
import {isLoggedIn,customRole} from "../middlewares/userMiddlewares.js"


// routes
router.route("/employee").post(addEmployee)
router.route("/employee").get(getAllEmployee)
router.route("/employee/:id").put(updateEmployeeById) 
router.route("/employee/:id").get(getEmployeeById)


export default router;