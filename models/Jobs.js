import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";


const jobsSchema = new mongoose.Schema({

     OpportunityId:{

       type: ObjectId,

     },

     business_name:{
       type: String,
       maxlength: [100 , 'Business name should be more then 100 characters.']
     },

     location:{
       type: String,
     },

     headcount:
     {
       type: Integer,

     },

     approval_status:
     {
       type: Integer,
     },

     approval_id:{
       type: ObjectId,
     }

})

const Jobs = mongoose.model("Jobs", jobsSchema);

export default Jobs;
