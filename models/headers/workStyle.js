import mongoose from "mongoose";

const workStyleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE","DELETED"],
    default: "ACTIVE",
  },
});

const WorkStyle = mongoose.model("WorkStyle", workStyleSchema);

export default WorkStyle;
