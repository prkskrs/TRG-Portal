import mongoose  from "mongoose";
import validator from "validator";


const questionBankSchema=new mongoose.Schema({
    departmentName:{
        type:String,
    },
    questionType:{
        type: String,
        enum: ['Objective', 'Subjective'],
        default: 'Objective'
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
        type:Number
    }
})




const QuestionBank = mongoose.model("QuestionBank",questionBankSchema);

export default QuestionBank;