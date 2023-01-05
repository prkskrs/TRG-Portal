import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a business name."],
    maxlength: [80, "Business name should be under 40 characters."],
  },
  address: {
    type: String,
    required: [true, "Please provide a address."],
    maxlength: [250, "Address should be under 100 characters."],
  },
  url: {
    type: String,
  },
  code: {
    type: String,
  },
  summary: {
    type: String,
  },
  logo: {
    id: {
      type: String,
    },
    secure_url: {
      type: String,
    },
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE","DELETED"],
    default: "ACTIVE",
  },
});

const Business = mongoose.model("Business", businessSchema);

export default Business;
