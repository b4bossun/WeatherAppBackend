import mongoose from "mongoose"

const register = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        required: "Username is required",
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: "Email is required",
    },
    password: {
        type: String,
        min: 6,
        max: 32,
        required: "Password is required",
    }
});
export default mongoose.model("register", register)