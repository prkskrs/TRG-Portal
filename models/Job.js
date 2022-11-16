import mongoose from "mongoose";


const jobsSchema = new mongoose.Schema({
  opportunityId: {
    type: mongoose.Schema.ObjectId,
  },
  numberOfOpenings: {
    type: Number
  },
  headcount:
  {
    type: Number,
  },
  departmentId: {
    type: mongoose.Schema.ObjectId,
  },
  businessId: {
    type: mongoose.Schema.ObjectId,
  },
  cityId: {
    type: mongoose.Schema.ObjectId,
  },
  stateId: {
    type: mongoose.Schema.ObjectId,
  },
  countryId: {
    type: mongoose.Schema.ObjectId,
  },
  profileId: {
    type: mongoose.Schema.ObjectId,
  },
  interviewRoundId: {
    type: mongoose.Schema.ObjectId,
  },
  questionBankId: {
    type: mongoose.Schema.ObjectId,
  },
  roundId: {
    type: mongoose.Schema.ObjectId,
  },
  workShiftId: {
    type: mongoose.Schema.ObjectId,
  },
  workTypeId: {
    type: mongoose.Schema.ObjectId,
  },
  compensationId: {
    type: mongoose.Schema.ObjectId,
  },

  approver_1: {
    id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    approved_at: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['APPROVED', 'PENDING', 'DECLINED'],
      default: 'PENDING'
    }
  },

  approver_2: {
    id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    approved_at: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['APPROVED', 'PENDING', 'DECLINED'],
      default: 'PENDING'
    }
  },

  approver_3: {
    id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    approved_at: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['APPROVED', 'PENDING', 'DECLINED'],
      default: 'PENDING'
    }
  },

  approver_4: {
    id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    approved_at: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['APPROVED', 'PENDING', 'DECLINED'],
      default: 'PENDING'
    }
  },

  status: {
    type: String,
    enum: ['APPROVED', 'PENDING', 'DECLINED'],
    default: 'PENDING'
  },

  createdBy: {
    id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  }
}, {
  timestamps: true
})

const Jobs = mongoose.model("Jobs", jobsSchema);

export default Jobs;
