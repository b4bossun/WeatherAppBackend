import weatherapp from "../model/weatherappbackend.js";

export const weatherappbackend1 = async (req, res) => {
    console.log(req.body);
    const weatherappbackend = new weatherapp({
        date: req.body.date,
        location: req.body.location,
        weatherreport: [{
            humiduty: req.body.humidity,
            windspeed: req.body.windespeed,
            temperature: req.body.temperature
        }]
    })

    try {
        await weatherappbackend.save();
        res.send({
            user: weatherappbackend._id
        })
    } catch (err) {
        res.status(400).send(err)
    }
};

export const fetchweather = async (req, res) => {
    const getweather = await weatherapp.find({ _id: req.params.id });
    console.log(getweather);
    res.json(getweather)
}