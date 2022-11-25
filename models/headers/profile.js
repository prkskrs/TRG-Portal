import mongoose, { Mongoose } from "mongoose";


const profileSchema = new mongoose.Schema({
    title: {
        type: String
    },
    profileType: {
        type: String
    },
    departmentId:{
        type: mongoose.Types.ObjectId
    },
    band: {
        type: Number
    },
    reportProfile: {
        type: mongoose.Types.ObjectId,
        default: null
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: "ACTIVE"
    },
})




const Profile = mongoose.model("Profile", profileSchema);

export default Profile;