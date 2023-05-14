import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    request: [{
        type: {type: String},
        amount: {type: Number},
        disease: {type: String},
        status: {type: String}
    }],
    donate: [{
        type: {type: String},
        amount: {type: Number},
        disease: {type: String},
        status: {type: String}
    }]
})

export default mongoose.model("User", userSchema)