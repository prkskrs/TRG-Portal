import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";


const jobapplicationSchema = new mongoose.Schema({

  applicationid:{

    type: ObjectId,

  },

  jobid:{
    type: ObjectId,
  },

  jobseekerid:{
    type: ObjectId,
  },

  recuiterid:{

    type: ObjectId,
  }


})

const JobApplication = new mongoose.model("JobApplication" , jobapplicationSchema);

export default JobApplication;
