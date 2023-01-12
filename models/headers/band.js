import mongoose from "mongoose";

const bandSchema = new mongoose.Schema({
  name: {
    type: String
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE","DELETED"],
    default: "ACTIVE",
  },
});

const Band = mongoose.model("Band", bandSchema);

export default Band;
