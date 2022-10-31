import mongoose  from "mongoose";


const citiesSchema=new mongoose.Schema({
    cityName:{
        type:String,
        required:[true,'Please provide a title'],
        maxlength:[80,'Title should be under 80 characters.']
    },
    state:{
        type:String,
        required:[true,'Please provide a state name.'],
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




const City = mongoose.model("City",citiesSchema);

export default City;