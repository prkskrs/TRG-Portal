import mongoose from "mongoose";

const currencySchema = new mongoose.Schema({
  name: {
    type: String
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE","DELETED"],
    default: "ACTIVE",
  },
});

const Currency = mongoose.model("Currency", currencySchema);

export default Currency;
