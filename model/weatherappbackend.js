import mongoose from "mongoose";

const weatherReportSchema = new mongoose.Schema({
  humidity: String,
  windspeed: String,
  temperature: String,
});

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
  weatherreport: [weatherReportSchema],
});
export default mongoose.model("weatherapp", weatherappbackend);
