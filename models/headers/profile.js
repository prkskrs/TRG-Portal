import mongoose  from "mongoose";


const profileSchema=new mongoose.Schema({
    title:{
        type:String
    },
    profileType:{
        type: [{
            type: String,
            enum: ['All', 'Business Specific', "Country Specific"]
        }],
        default: ['All']
    },
    level:{
        type:Number
    },
    reportProfile:{
        type: [{
            type: String,
            enum: ['GROUP CEO', 'HR Manager']
        }],
        default: ['None']
    },
    status:{
        type: [{
            type: String,
            enum: ['Active', 'Inactive']
        }],
        default: ['Active']
    },
})




const Profile = mongoose.model("Profile",profileSchema);

export default Profile;