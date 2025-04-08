import mongoose, { Schema, model } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    status: {
        type: String,
        enum: ["completed", "reading"],
        default: "completed"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

export const Book = model("Book", bookSchema);