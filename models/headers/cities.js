import mongoose from "mongoose";


const citiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a title'],
        maxlength: [80, 'Title should be under 80 characters.']
    },
    state: {
        type: mongoose.Types.ObjectId,
        default: null
    },
    country: {
        type: mongoose.Types.ObjectId,
        default: null,
    },
    status: {
        type: [{
            type: String,
            enum: ['ACTIVE', 'INACTIVE']
        }],
        default: ['ACTIVE']
    },
})




const City = mongoose.model("City", citiesSchema);

export default City;