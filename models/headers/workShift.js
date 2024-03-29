import mongoose from "mongoose";

const workShiftSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE","DELETED"],
    default: "ACTIVE",
  },
});

const WorkShift = mongoose.model("WorkShift", workShiftSchema);

export default WorkShift;
