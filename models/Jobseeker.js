import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs/dist/bcrypt.js"
import jwt from "jsonwebtoken"


const jobseekerSchema = new mongoose.Schema({
  name:{
    type: String,
    maxlength: [80 , 'Name should not be more then 80 characters.']
  },
  email:{
    type:String,
    required:[true,'Please provide an email'],
    validate:[validator.isEmail,'Please enter email in correct format'],
    unique:true
  },
  password:{
    type: String,
    minlength:[6,"Password should be of atleast 6 characters."],
  },
  address:{
    type:String
  },
  phoneNumber:{
    type:String,
    match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
  },
  experience:{
    type:Number
  },
  education:{
    type: String
  },
  skills:[{
    type:String
  }],
  bio:{
    type: String,
    maxlength: [350 , 'Bio should not be more then 350 characters,']
  },
  resume:{
    id:{
      type:String
    },
    secure_url:{
      type:String
    }
  },
  profile_img:{
    id:{
      type:String
    },
    secure_url:{
      type:String
    }
  },
  forgotPasswordToken:String,
  forgotPasswordExpiry:Date,
  
}, {
  timestamps: true
})

// encrypt password before save
jobseekerSchema.pre('save',async function(next) {
  if (!this.isModified('password')){
      return next();
  }
  this.password=await bcrypt.hash(this.password,10)
})

// validate the password with passed on user password
jobseekerSchema.methods.isValidatedPassword= async function(usersendPassword, password){
  return await bcrypt.compare(usersendPassword,password);
}

// create and return jwt token
jobseekerSchema.methods.getJwtToken=function(){
  return jwt.sign({id:this._id},process.env.JWT_SECRET,{
      expiresIn:process.env.JWT_EXPIRY
  })
}

// generate forget password token (string)
jobseekerSchema.methods.getForgotPasswordToken = function(){
  // generate a long and random string
  const forgotToken = crypto.randomBytes(20).toString("hex");

  // getting a hash - make sure to get a hash on backend
  this.forgotPasswordToken=crypto.createHash("sha256").update(forgotToken).digest("hex")

  // time of token
  this.forgotPasswordExpiry=Date.now()+20*60*1000;  // 20 mins to expire password reset token

  return forgotToken;
}


  
const Jobseeker = new mongoose.model("Jobseeker" , jobseekerSchema);

export default Jobseeker;
