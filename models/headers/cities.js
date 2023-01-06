import mongoose from "mongoose";

const citiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a title"],
    maxlength: [80, "Title should be under 80 characters."],
  },
  state: {
    type: mongoose.Types.ObjectId,
    default: null,
  },
  country: {
    type: mongoose.Types.ObjectId,
    default: null,
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE","DELETED"],
    default: "ACTIVE",
  },
});

const City = mongoose.model("City", citiesSchema);

export default City;
