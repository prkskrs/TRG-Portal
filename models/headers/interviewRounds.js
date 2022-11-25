import mongoose  from "mongoose";


const interviewRoundSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    profile:{
        type:String,
    },
    noOfRound:{
        type:Number,
    },
    noOfQuestion:{
        type:Number,
    },
    question:[{
        type:mongoose.Types.ObjectId
    }]
})




const InterviewRound = mongoose.model("InterviewRound",interviewRoundSchema);

export default InterviewRound;