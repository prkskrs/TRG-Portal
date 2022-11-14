import mongoose  from "mongoose";

const applicationSchema = new mongoose.Scherma({
  jobseekerId:{
    type: mongoose.Types.ObjectId,
  },
  jobId:{
    type: mongoose.Types.ObjectId,
  },
  status:{
    type:String,
    enum:["Disable","Unemployed","Student"]
  }
})

const Application = mongoose.model("Application" , applicationSchema);

export default Application;
