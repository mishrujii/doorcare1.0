import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
    reviewText:{
        type: String,
        required: true
    },
    reviewRating:{
        type: Number,
        required: true
    }
})

const reviewModel = mongoose.model("review",reviewSchema)

export default reviewModel