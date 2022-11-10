import mongoose  from "mongoose";


const workShiftSchema=new mongoose.Schema({
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




const Workshift = mongoose.model("Workshift",workShiftSchema);

export default Workshift;