import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const employeeSchema = new mongoose.Schema({

           UserId:{

             type: ObjectId,

           },

           firstname:{

             type: String,
             maxlength: [80 , 'Firstname should be under 80 characters.']
           },

           lastname:{
             type: String,
             maxlength: [80 , 'Lastname should be under 80 characters.']
           },

           email:{
               type:String,
               required:[true,'Please provide an email'],
               validate:[validator.isEmail,'Please enter email in correct format'],
               unique:true
           },

           roles:{
               type: [{
                   type: String,
                   enum: ['admin', 'user']
               }],

               default: ['user']
           },

           phoneNumber: {
             type: Integer,

           },

           address1: {

             type: String,
               maxlength: [250, 'Address1 should be under 200 characters.']

           },

           address2: {

             type: String,
               maxlength: [250, 'Address1 should be under 200 characters.']

           },

           city: {
             type: String,

           },

           state:{
             type: String,

           },

           postalcode:{

             type: Number,
           },
})


const Employee = mongoose.model("Employee",employeeSchema);

export default Employee;
