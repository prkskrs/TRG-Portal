import express from "express"
const router = express.Router()

// import controller 
import { loginJobSeeker, signUpJobSeeker, logout, getLoggedInJobSeekerDetails } from "../controllers/jobSeekerController.js"

// import userMiddlewares
import {isLoggedIn} from "../middlewares/jobSeekerMiddleware.js"

router.route("/signupJobSeeker").post(signUpJobSeeker)
router.route("/loginJobSeeker").post(loginJobSeeker)
router.route("/logout").get(logout)
router.route("/jobSeekerDashboard").get(isLoggedIn, getLoggedInJobSeekerDetails)





export default router;