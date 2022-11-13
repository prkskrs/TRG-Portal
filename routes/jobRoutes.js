import express from "express"
const router = express.Router()

// import controller 
import { addJob, deletedJobById, getAllJobs, updateJobById } from "../controllers/jobController.js"
// import userMiddlewares
import {isLoggedIn,customRole} from "../middlewares/userMiddlewares.js"


// routes
router.route("/job").post(addJob)
router.route("/job").get(getAllJobs)
router.route("/job/:id").put(updateJobById)
router.route("/job/:id").delete(deletedJobById)


export default router;