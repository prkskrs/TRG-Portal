import mongoose  from "mongoose";


const compensationSchema=new mongoose.Schema({
    data:{
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




const Compensation = mongoose.model("Compensation",compensationSchema);

export default Compensation;