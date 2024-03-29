import express from "express";
const router = express.Router();

// import controller
import {
  addJob,
  deletedJobById,
  getAllJobs,
  getJobById,
  updateJobById,
} from "../controllers/jobController.js";
// import userMiddlewares
import { isLoggedIn, customRole } from "../middlewares/userMiddlewares.js";

// routes
router.route("/job").post(isLoggedIn, addJob);
router.route("/job").get(getAllJobs);
router.route("/job/:id").put(isLoggedIn, updateJobById);
router.route("/job/:id").get(getJobById);
router.route("/job/:id").delete(deletedJobById);

export default router;
