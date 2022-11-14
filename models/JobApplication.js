import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";


const jobapplicationSchema = new mongoose.Schema({

  applicationId:{
    type: mongoose.Schema.ObjectId,
  },

  jobId:{
    type: mongoose.Schema.ObjectId,
  },
  jobseekerId:{
    type: mongoose.Schema.ObjectId,
    ref: "Jobseeker"
  },
  recuiterId:{
    type: mongoose.Schema.ObjectId,
  }
})

const JobApplication = new mongoose.model("JobApplication" , jobapplicationSchema);

export default JobApplication;
