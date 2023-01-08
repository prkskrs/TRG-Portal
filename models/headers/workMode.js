import mongoose from "mongoose";

const workModeSchema = new mongoose.Schema({
  workType: {
    type: String,
    enum: ["FULL-TIME", "PART-TIME", "INTERN", "CONTRACT"],
  },
  workShift: {
    type: String,
    enum: ["DAY", "NIGHT"],
  },
  workStyle: {
    type: String,
    enum: ["REMOTE", "ONSITE", "HYBRID"],
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE"],
    default: "ACTIVE",
  },
});

const WorkMode = mongoose.model("WorkMode", workModeSchema);

export default WorkMode;
