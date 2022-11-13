import mongoose  from "mongoose";


const roundsSchema=new mongoose.Schema({
    roundName:{
        type:String,
    }
})


const Round = mongoose.model("Round",roundsSchema);

export default Round;