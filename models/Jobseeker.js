import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import jwt from "jsonwebtoken";

const jobseekerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      maxlength: [80, "Name should not be more then 80 characters."],
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
    phoneNumber: {
      type: String,
      match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    },
    workStatus: {
      type: String,
      enum: ["Experienced", "Fresher"],
    },
    resume: {
      id: {
        type: String,
      },
      secure_url: {
        type: String,
      },
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    employment: [
      {
        currentlyEmployed: {
          type: String,
        },
        totalWorkExperience: {
          year: {
            type: Number,
          },
          month: {
            type: Number,
          },
        },
        company: {
          type: String,
        },
        jobTitle: {
          type: String,
          required: true,
        },
        currentCity: {
          type: String,
          required: true,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
        annualIncome: {
          type: Number,
        },
      },
    ],
    education: [
      {
        education: {
          type: String,
        },
        course: {
          type: String,
        },
        specialization: {
          type: String,
        },
        university: {
          type: String,
        },
        courseType: {
          type: String,
          enum: ["Full-time", "Part-time", "Online"],
        },
        startingYear: {
          type: Number,
        },
        passYear: {
          type: Number,
        },
      },
    ],
    avatar: {
      id: {
        type: String,
      },
      secure_url: {
        type: String,
      },
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    finalStep: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// encrypt password before save
jobseekerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// validate the password with passed on user password
jobseekerSchema.methods.isValidatedPassword = async function (
  usersendPassword,
  password
) {
  return await bcrypt.compare(usersendPassword, password);
};

// create and return jwt token
jobseekerSchema.methods.generateJWT = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

// generate forget password token (string)
jobseekerSchema.methods.getForgotPasswordToken = function () {
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

const JobSeeker = new mongoose.model("JobSeeker", jobseekerSchema);

export default JobSeeker;
