import mongoose from "mongoose";

const bloodRequestSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    disease: {
        type: String
    }
})

export default mongoose.model("Request_Blood_Form", bloodRequestSchema);