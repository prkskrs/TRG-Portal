import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a title"],
    maxlength: [80, "Title should be under 80 characters."],
  },
  description: {
    type: String,
    required: [300, "Please provide a description."],
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE"],
    default: "ACTIVE",
  },
});

const Department = mongoose.model("Department", departmentSchema);

export default Department;
