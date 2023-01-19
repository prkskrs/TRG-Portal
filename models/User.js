import mongoose, { Mongoose } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      // required:[true,'Please provide a name'],
      maxlength: [80, "Name should be under 40 characters."],
    },
    lastName: {
      type: String,
      maxlength: [80, "Name should be under 40 characters."],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      validate: [validator.isEmail, "Please enter email in correct format"],
      unique: true,
    },
    password: {
      type: String,
      minlength: [6, "Password should be of atleast 6 characters."],
    },
    role: {
      type: String,
      enum: ["ADMIN", "EMPLOYEE"],
    },
    band: {
      type: String,
    },
    profileId: {
      type: mongoose.Types.ObjectId,
    },
    address1: {
      type: String,
      maxlength: [300, "Address1 should be under 200 characters."],
    },
    address2: {
      type: String,
      maxlength: [300, "Address2 should be under 200 characters."],
    },

    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
  },
  {
    timestamps: true,
  }
);

// encrypt password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// validate the password with passed on user password
userSchema.methods.isValidatedPassword = async function (
  usersendPassword,
  password
) {
  return await bcrypt.compare(usersendPassword, password);
};

// create and return jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

// generate forget password token (string)
userSchema.methods.getForgotPasswordToken = function () {
  // generate a long and random string
  const forgotToken = crypto.randomBytes(20).toString("hex");

  // getting a hash - make sure to get a hash on backend
  this.forgotPasswordToken = crypto
    .createHash("sha256")
    .update(forgotToken)
    .digest("hex");

  // time of token
  this.forgotPasswordExpiry = Date.now() + 20 * 60 * 1000; // 20 mins to expire password reset token

  return forgotToken;
};

const User = mongoose.model("User", userSchema);

export default User;
