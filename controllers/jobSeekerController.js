import bigPromise from "../middlewares/bigPromise.js";
import JobSeeker from "../models/JobSeeker.js";
import { cookieTokenJobseeker } from "../utils/cookieToken.js";
import sendEmail from "../utils/mailHelper.js";
import Otp from "../models/Otp.js";

const generateOTP = () => {
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

const sendOTP = async (email, OTPGen) => {
  // Otp Existence check
  const otp = await Otp.findOne({ email: email });
  if (otp !== null) {
    // Update Existing OTP
    var newOtp = await Otp.findByIdAndUpdate(
      otp._id,
      { email: email, otp: OTPGen },
      { new: true, runValidators: true, useFindAndModify: false }
    );
  } else {
    // Create New OTP
    var newOtp = await Otp.create({ email: email, otp: OTPGen });
  }

  // Send Mail
  await sendEmail({
    email: email,
    subject: "Your OTP (Valid for 5 minutes)",
    message: `Your One Time Password is ${OTPGen}`,
  });

  return newOtp;
};

export const registerJobSeeker = bigPromise(async (req, res, next) => {
  const {
    fullName,
    email,
    password,
    address,
    phoneNumber,
    experience,
    education,
    avatar,
  } = req.body;

  const toStore = {
    fullName,
    email,
    password,
    address,
    phoneNumber,
    experience,
    education,
    avatar,
  };

  if (!fullName || !email || !password) {
    return res.status(401).json({
      success: false,
      message: "Full Name, Email, Password and WorkStatus is required",
    });
  }

  const emailIsActive = await JobSeeker.findOne({
    email,
    isActive: true,
    isVerified: true,
  });

  if (emailIsActive) {
    return res.status(406).json({
      success: false,
      message: "User already exists with this email id.",
    });
  }

  const OTPGen = generateOTP();
  const notVerifiedUser = await JobSeeker.find({
    email: email,
    isVerified: false,
  })
    .lean()
    .catch((err) => {
      console.log(`error getting verified user ${err}`);
      return null;
    });

  if (notVerifiedUser.length === 0) {
    const jobSeeker = await JobSeeker.create(toStore).catch((err) => {
      console.log(`error creating user ${err}`);
    });
    const newOtp = sendOTP(email, OTPGen);
    if (newOtp) {
      res.status(200).json({
        success: true,
        message: `OTP was sent successfully to your ${email}.`,
        otp: OTPGen,
      });
    }
  } else {
    const newOtp = sendOTP(email, OTPGen);
    if (newOtp) {
      res.status(200).json({
        success: true,
        message: `OTP was sent successfully to your ${email}.`,
        otp: OTPGen,
      });
    }
  }
});

export const otpValid = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    console.log(otp, email);
    const verify = await Otp.findOne({ email, otp })
      .lean()
      .catch((err) => {
        console.log(`error validating Otp :: ${err}`);
        return null;
      });
      
    if (verify === null) {
      return res.status(400).json({
        success: false,
        message: "Invalid token or Token expired",
      });
    }

    const jobSeeker = await JobSeeker.findOneAndUpdate(
      { email: email },
      { isVerified: true },
      { new: true }
    );

    const data = { token: jobSeeker.generateJWT() };

    res.status(200).json({
      success: true,
      message: "JobSeeker Registered Successfully!",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginJobSeeker = bigPromise(async (req, res, next) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    return res.status(400).json({
      success: "false",
      message: "Email and Password fields are required.",
    });
  }
  const jobSeeker = await JobSeeker.findOne({ email: email }).catch((err) => {
    console.log(`error finding jobseeker ${err}`);
    return null;
  });

  if (jobSeeker === null) {
    return res.status(400).json({
      success: "false",
      message: "You're not registered in our app",
    });
  }

  const isPasswordCorrect = await jobSeeker.isValidatedPassword(
    password,
    jobSeeker.password
  );

  if (!isPasswordCorrect) {
    return res.status(401).json({
      success: "false",
      message: "Incorrect Password",
    });
  }

  const token = jobSeeker.generateJWT();

  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 3600000 * 24 * 3,
    })
    .json({
      message: "LoggedIn Successfully!",
      token: token,
      data: jobSeeker,
    });
});

export const logout = bigPromise(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "loggedOut Successfully",
  });
});

export const getLoggedInJobSeekerDetails = bigPromise(
  async (req, res, next) => {
    const jobseeker = await Jobseeker.findById(req.user.id).catch((err) => {
      console.log(`error finding jobseeker details ${err}`);
      return null;
    });
    jobseeker.password = undefined;

    if (!jobseeker) {
      return res.status(501).json({
        success: false,
        message: "Internal server error!",
      });
    }

    res.status(200).json({
      success: true,
      jobseeker,
    });
  }
);

export const updateDetails = bigPromise(async (req, res, next) => {
  try {
    const id = req.user.id;
    const newData = {
      fullName: req.body.fullName,
      email: req.body.email,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      experience: req.body.experience,
      education: req.body.education,
      avatar: req.body.avatar,
      finalStep: req.query.finalStep,
    };

    const updatedJobSeeker = await JobSeeker.findByIdAndUpdate(id, newData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    })
      .lean()
      .catch((err) => {
        console.log(`error updating JobSeeker details :: ${err}`);
        return null;
      });

    if (updatedJobSeeker === null) {
      return res.status(400).json({
        success: false,
        message: "Failed to update jobSeeker",
      });
    }

    const response = {
      success: true,
      message: "JobSeeker Updated Successfully!",
      data: updatedJobSeeker,
    };

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
});
