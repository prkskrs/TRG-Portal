import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";


const jobsSchema = new mongoose.Schema({
  opportunityId : {
    type: mongoose.Schema.ObjectId,
  },
  businessName:{
    type: String,
    maxlength: [100 , 'Business name should be more then 100 characters.']
  },
  location:{
    type: String,
  },
  headcount:
  {
    type: Number,
  },

  approver_1:{
    id:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
      },  
    approved_at:{
      type : Date,
      default:Date.now()
    },
    status:{
      type: [{
            type: String,
            enum: ['Approved', 'Unapproved']
        }],
        default: ['Unapproved']
  }},

  approver_2:{
    id:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
      },  
    approved_at:{
      type : Date,
      default:Date.now()
    },
    status:{
      type: [{
            type: String,
            enum: ['Approved', 'Unapproved']
        }],
        default: ['Unapproved']
  }},

  approver_3:{
    id:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
      },  
    approved_at:{
      type : Date,
      default:Date.now()
    },
    status:{
      type: [{
            type: String,
            enum: ['Approved', 'Unapproved']
        }],
        default: ['Unapproved']
  }},

  approver_4:{
  id:{
      type:mongoose.Schema.ObjectId,
      ref:'User'
    },  
  approved_at:{
    type : Date,
    default:Date.now()
  },
  status:{
    type: [{
          type: String,
          enum: ['Approved', 'Unapproved']
      }],
      default: ['Unapproved']
  }},

  departmentId:{
    type:mongoose.Schema.ObjectId,
  },
  business:{
    type:String
  },
  city:{
    type:String
  },
  country:{
    type:String
  },
  interviewRoundId:{
    type:mongoose.Schema.ObjectId,
  },
  questionBankId:{
    type:mongoose.Schema.ObjectId,
  },
  roundId:{
    type:mongoose.Schema.ObjectId,
  },
  state:{
    type:String
  },
  profile:{
    type:String
  },
  workShiftId:{
    type:mongoose.Schema.ObjectId,
  },
  workTypeId:{
    type:mongoose.Schema.ObjectId,
  },
  compensationId:{
    type:mongoose.Schema.ObjectId,
  },
  createdBy:{
    id:{
      type:mongoose.Schema.ObjectId,
      ref:'User'
    }
  }

})

const Jobs = mongoose.model("Jobs", jobsSchema);

export default Jobs;
