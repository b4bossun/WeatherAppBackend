import mongoose from "mongoose"

const certificates = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
    },
    score: [{
        percentage: String,
        averagescore: String,
        overallscore: String,
    }],
    school: {
        type: String,
        unique: true,
        trim: true,
    },
    class: {
        type: String,
        unique: true,
        trim: true,
    },
    graduationyear: {
        type: String,
        unique: true,
        trim: true,
    },
});
export default mongoose.model("certificate", certificates)