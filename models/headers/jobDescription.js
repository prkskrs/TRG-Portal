import mongoose from "mongoose";

const jdSchema = new mongoose.Schema({
  profile: {
    type: mongoose.Types.ObjectId
  },
  dailyJob:{
    type:String
  },
  responsibilities:{
    type:String
  },
  kpi:{
    type:String
  },
  eligibilityCriteria:{
    type:String
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE","DELETED"],
    default: "ACTIVE",
  },
});

const JobDescription = mongoose.model("JobDescription", jdSchema);

export default JobDescription;
