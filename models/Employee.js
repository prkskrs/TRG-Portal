import mongoose, { Mongoose } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String
  },
  userId: {
    type: mongoose.Types.ObjectId
  },
  firstName: {
    type: String,
    maxlength: [80, 'Firstname should be under 80 characters.']
  },
  lastName: {
    type: String,
    maxlength: [80, 'Lastname should be under 80 characters.']
  },
  departmentId: {
    type: mongoose.Types.ObjectId
  },
  businessId: {
    type: mongoose.Types.ObjectId
  },
  cityId: {
    type: mongoose.Types.ObjectId,
  },
  stateId: {
    type: mongoose.Types.ObjectId,
  },
  countryId: {
    type: mongoose.Types.ObjectId,
  },
  band: {
    type: Number
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    validate: [validator.isEmail, 'Please enter email in correct format']
  },
  role: {
    type: {
      type: String,
      enum: ['admin', 'employee']
    },
  },
  phoneNumber: {
    type: Number,
  },
  address1: {
    type: String,
    maxlength: [250, 'Address1 should be under 250 characters.']
  },
  address2: {
    type: String,
    maxlength: [250, 'Address2 should be under 250 characters.']
  },
  postalCode: {
    type: Number,
  }
})


const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
