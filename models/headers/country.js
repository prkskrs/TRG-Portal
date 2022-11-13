import mongoose  from "mongoose";

const countrySchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide a country name.'],
        maxlength:[80,'Title should be under 40 characters.']
    },
    code:{
        type:String,
        required:true,
        uppercase: true
    },
    status:{
        type: [{
            type: String,
            enum: ['Active', 'Inactive']
        }],
        default: ['Active']
    },
})

const Country = mongoose.model("Country",countrySchema);

export default Country;