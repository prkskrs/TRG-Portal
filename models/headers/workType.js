import mongoose from "mongoose";

const workTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["FULL-TIME", "PART-TIME", "INTERN", "CONTRACT"],
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE","DELETED"],
    default: "ACTIVE",
  },
});

const WorkType = mongoose.model("WorkType", workTypeSchema);

export default WorkType;
