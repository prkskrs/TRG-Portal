import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";


const applicationSchema = new mongoose.Scherma({


  jobseekerid:{

    type: ObjectId,

  },

  jobid:{
    type: ObjectId,
  },

  name:{
    type: String,
    maxlength: [80 , 'Name should be not more then 80 characters.']
  },

  email:{
      type:String,
      required:[true,'Please provide an email'],
      validate:[validator.isEmail,'Please enter email in correct format'],
      unique:true
  },

  phone:{

    type: Number,

  },

  address: {

    type: String,
      maxlength: [250, 'Address1 should be under 200 characters.']

  },

  disability:{

    type: String,
    maxlength:[100 , 'Disability should not be more then 100 characters.']
  },

  resume:{
    {
      id: {
        type: String,

      },
      link: {
        type:
      }
    }


  },

  coverletter:{
    {
      id: {
        type: String,

      },
      link: {
        type:
      }
    }

  }



})

const Application = mongoose.model("Application" , applicationSchema);

export default Application;
