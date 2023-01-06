import mongoose  from "mongoose";


const compensationSchema=new mongoose.Schema({
    data:{
        type:String
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE', "DELETED"],
        default: "ACTIVE"
    },
})


const Compensation = mongoose.model("Compensation",compensationSchema);

export default Compensation;