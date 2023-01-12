import mongoose from "mongoose";

const workTypeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE","DELETED"],
    default: "ACTIVE",
  },
});

const WorkType = mongoose.model("WorkType", workTypeSchema);

export default WorkType;
