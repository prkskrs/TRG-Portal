import express from "express";
const router = express.Router();

// import controller
import {
  loginJobSeeker,
  logout,
  getLoggedInJobSeekerDetails,
  registerJobSeeker,
  otpValid,
  updateDetails,
} from "../controllers/jobSeekerController.js";

// import userMiddlewares
import { isLoggedIn } from "../middlewares/jobSeekerMiddleware.js";

router.route("/jobSeeker/register").post(registerJobSeeker);
router.route("/jobSeeker/login").post(loginJobSeeker);
router.route("/jobSeeker/logout").get(logout);
router
  .route("/jobSeeker/dashboard")
  .get(isLoggedIn, getLoggedInJobSeekerDetails);
router.route("/jobSeeker/otp-verify").post(otpValid);
router.route("/jobSeeker/update").put(isLoggedIn, updateDetails);

export default router;
