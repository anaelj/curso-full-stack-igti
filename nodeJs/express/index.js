import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world 2!");
});

app.post("/", (req, res) => {
    res.send("Hello world 3!");
});

app.listen(3000, () => {
    console.log("api started");
})