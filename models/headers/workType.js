import mongoose  from "mongoose";


const workTypeSchema=new mongoose.Schema({
    title:{
        type:String
    },
    status:{
        type: [{
            type: String,
            enum: ['Active', 'Inactive']
        }],
        default: ['Active']
    },
})




const Worktype = mongoose.model("Worktype",workTypeSchema);

export default Worktype;