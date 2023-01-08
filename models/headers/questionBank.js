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
  correctAnswer: {
    type:String
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE", "DELETED"],
    default: "ACTIVE",
  },
   
});

const QuestionBank = mongoose.model("QuestionBank", questionBankSchema);

export default QuestionBank;
