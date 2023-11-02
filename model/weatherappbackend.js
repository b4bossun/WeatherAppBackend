import mongoose from "mongoose"

const weatherappbackend = new mongoose.Schema({
    date: {
        type: String,
        unique: true,
        trim: true,
    },
    location: {
        type: String,
        unique: true,
        trim: true,
    },
    weatherreport: [{
        humidity: String,
        windspeed: String,
        temperature: String,
    }],
});
export default mongoose.model("weatherapp", weatherappbackend)