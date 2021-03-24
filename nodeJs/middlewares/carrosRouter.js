import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("GET /carros")
})

router.get("/precos", (req, res) => {
    res.send("GET /carros/precos")
})

export default router;