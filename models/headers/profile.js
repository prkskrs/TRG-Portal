import mongoose, { Mongoose } from "mongoose";

const profileSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  profileType: {
    type: String,
  },
  departmentId: {
    type: mongoose.Types.ObjectId,
  },
  band: {
    type: String,
  },
  reportProfile: {
    type: String,
    default: null,
  },
  approvingAuthority: [
    {
      profile: {
        type: mongoose.Types.ObjectId,
        default: null,
      },
      tasks: [
        {
          type: String,
        },
      ],
    },
  ],
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE", "DELETED"],
    default: "ACTIVE",
  },
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
