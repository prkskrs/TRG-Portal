import mongoose  from "mongoose";


const interviewRoundSchema=new mongoose.Schema({
    profile:{
        type:String,
    },
    noOfRounds:{
        type:Number,
    },
    noOfQuestion:{
        type:Number,
    },
})




const InterviewRound = mongoose.model("InterviewRound",interviewRoundSchema);

export default InterviewRound;