import mongoose, { mongo } from "mongoose";
import validator from "validator";

const questionBankSchema = new mongoose.Schema({
  departmentId: {
    type: mongoose.Types.ObjectId,
  },
  questionType: {
    type: String,
    enum: ["Objective", "Subjective"],
    default: "Objective",
  },
  question: {
    type: String,
  },
  options: [
    {
      optionNumber: {
        type: Number,
      },
      answerBody: {
        type: String,
        minlength: 1,
        maxlength: 200,
      },
    },
  ],
  correctAnswer: [{
    correctOption: {
      type: Number,
    },
    answerBody: {
      type: String
    },
  }],
   
});

const QuestionBank = mongoose.model("QuestionBank", questionBankSchema);

export default QuestionBank;
