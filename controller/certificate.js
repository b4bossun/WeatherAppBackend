import certificate from "../model/certificate.js";

export const certificatebackend1 = async (req, res) => {
    console.log(req.body);
    const certificateback = new certificate({
        name: req.body.name,
        school: req.body.school,
        class: req.body.class,
        graduationyear: req.body.graduationyear,
        score: [{
            percentage: req.body.percentage,
            averagescore: req.body.averagescore,
            overallscore: req.body.overallscore
        }]
    })

    try {
        await certificateback.save();
        res.send({
            user: certificateback._id
        })
    } catch (err) {
        res.status(400).send(err)
    }
};

export const fetchcertificatebackend1 = async (req, res) => {
    const getcertificatebackend1 = await certificate.find({ _id: req.params.id });
    res.json(getcertificatebackend1)
}