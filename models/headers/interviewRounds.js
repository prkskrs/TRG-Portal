import mongoose from "mongoose";

const interviewRoundSchema = new mongoose.Schema({
  profile: {
    type: String,
  },
  noOfRound: {
    type: Number,
  },
  noOfQuestion: {
    type: Number,
  },
  rounds: [
    {
      round: {
        type: mongoose.Types.ObjectId,
      },
      question: [
        {
          type: mongoose.Types.ObjectId,
        },
      ],
      subjectiveQuestion: {
        type: Number,
      },
      objectiveQuestion: {
        type: Number,
      },
      time: {
        type: Number,
      },
      totalMarks: {
        type: Number,
      },
      disclaimer: {
        type: String,
      },
    },
  ],
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE", "DELETED"],
    default: "ACTIVE",
  },
});

const InterviewRound = mongoose.model("InterviewRound", interviewRoundSchema);

export default InterviewRound;
