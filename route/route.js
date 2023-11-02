import express from "express";
import { signUp } from "../controller/Auth.js";
import { signIn } from "../controller/Auth.js";
import { fetchweather, weatherappbackend1 } from "../controller/weatherappbackend.js";
import { certificatebackend1, fetchcertificatebackend1 } from "../controller/certificate.js";

const router = express.Router();

router.post("/register", signUp)
router.post("/signin", signIn)
router.post("/postweatherappbackend", weatherappbackend1)
router.get("/fetchweather", fetchweather)
router.post("/certificatebackend1", certificatebackend1),
    router.get("/getfetchcertificate", fetchcertificatebackend1)

export default router;