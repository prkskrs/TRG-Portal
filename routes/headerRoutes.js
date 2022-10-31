import express from "express"
const router = express.Router()

// import controller 
import { addBusiness, getAllBusiness } from "../controllers/headers/headers.controller.js"
// import userMiddlewares
// import {isLoggedIn,customRole} from "../middlewares/userMiddlewares.js"

router.route("/addBusiness").post(addBusiness)
router.route("/getAllBusiness").get(getAllBusiness)



export default router;