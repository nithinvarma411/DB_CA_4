import mongoose from "mongoose";

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected successfully");
    } catch (error) {
        console.error(error);
        
    }
}

export default connectDB;