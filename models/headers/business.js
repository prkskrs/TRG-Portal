import mongoose  from "mongoose";


const businessSchema=new mongoose.Schema({
    businessName:{
        type:String,
        required:[true,'Please provide a business name.'],
        maxlength:[80,'Business name should be under 40 characters.']
    },
    address:{
        type:String,
        required:[true,'Please provide a address.'],
        maxlength:[250,'Address should be under 100 characters.']
    },
    businessUrl:{
        type:String,
    },
    businessCode:{
        type:String
    },
    summary:{
        type:String
    },
    businessLogo:{
        id:{
            type:String,
        },
        secure_url:{
            type:String,
        }
    },
    description:{
        type:String,
    },
    status:{
        type: [{
            type: String,
            enum: ['Active', 'Inactive']
        }],
        default: ['Active']
    },
})




const Business = mongoose.model("Business",businessSchema);

export default Business;