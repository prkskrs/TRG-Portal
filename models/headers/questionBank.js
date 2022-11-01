import mongoose  from "mongoose";
import validator from "validator";


const questionBankSchema=new mongoose.Schema({
    departmentName:{
        type:String,
    },
    questionType:{
        type: [{
            type: String,
            enum: ['Objective', 'Subjective']
        }],
    },
    question:{
        type:String
    },
    options:{
        type: [{
            optionNumber: {
                type: Number
              },
              answerBody: {
                type: String,
                minlength: 1,
                maxlength: 200,
              },
              isCorrectAnswer: { 
                type: Boolean,
                default: false
              }
        }],
        default: undefined,
    },
    correctAnswer:{
        type:String
    }
})




const QuestionBank = mongoose.model("QuestionBank",questionBankSchema);

export default QuestionBank;