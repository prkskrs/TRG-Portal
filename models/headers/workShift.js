import mongoose  from "mongoose";


const workShiftSchema=new mongoose.Schema({
    title:{
        type:String
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: "ACTIVE"
    },
})




const Workshift = mongoose.model("Workshift",workShiftSchema);

export default Workshift;