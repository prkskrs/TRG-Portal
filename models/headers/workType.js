import mongoose  from "mongoose";


const workTypeSchema=new mongoose.Schema({
    title:{
        type:String
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: "ACTIVE"
    },
})




const Worktype = mongoose.model("Worktype",workTypeSchema);

export default Worktype;