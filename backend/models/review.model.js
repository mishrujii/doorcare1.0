import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "patient"
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "doctor"
    },
    reviewText:{
        type: String,
        required: true
    },
    reviewRating:{
        type: Number,
        required: true
    },  
    reviewTime: {
        type: Date,
        default: Date.now,
        required: true
    }
})

const reviewModel = mongoose.model("review",reviewSchema)

export default reviewModel