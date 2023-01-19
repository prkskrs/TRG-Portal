import mongoose from "mongoose";

const jobapplicationSchema = new mongoose.Schema(
  {
    applicationId: {
      type: mongoose.Schema.ObjectId,
    },
    jobId: {
      type: mongoose.Schema.ObjectId,
    },
    jobseekerId: {
      type: mongoose.Schema.ObjectId,
    },
    recuiterId: {
      type: mongoose.Schema.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

const JobApplication = new mongoose.model(
  "JobApplication",
  jobapplicationSchema
);

export default JobApplication;
