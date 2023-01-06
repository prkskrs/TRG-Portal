import mongoose from "mongoose";

const statesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a title"],
    maxlength: [80, "Title should be under 80 characters."],
  },
  country: {
    type: mongoose.Types.ObjectId,
    default: null,
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE", "DELETED"],
    default: "ACTIVE",
  },
});

const State = mongoose.model("State", statesSchema);

export default State;
