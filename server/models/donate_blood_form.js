import mongoose from "mongoose";

const bloodSchema = mongoose.Schema({
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

export default mongoose.model("Donate_Blood_Form", bloodSchema);