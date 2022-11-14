import mongoose  from "mongoose";


const statesSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide a title'],
        maxlength:[80,'Title should be under 80 characters.']
    },
    country:{
        type:String,
        required:[true,'Please provide a country name.'],
    },
    status:{
        type: [{
            type: String,
            enum: ['Active', 'Inactive']
        }],
        default: ['Active']
    },
})




const State = mongoose.model("State",statesSchema);

export default State;