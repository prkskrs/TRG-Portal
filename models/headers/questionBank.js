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
        default: ['Objective']
    },
    question:{
        type:String
    },
    option:{
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
        // validate: {
        //   validator: function(value: any) {
        //     return value && value.length === 4;
        //   },
        //   message: 'Answer options should be 4.'
        // }
    },
    correctAnswer:{
        type:String
    }
})




const QuestionBank = mongoose.model("QuestionBank",questionBankSchema);

export default QuestionBank;