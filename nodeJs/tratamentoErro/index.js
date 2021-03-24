import express from "express";

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    throw new Error("Teste criação de erro")
})


app.use((err, req, res, next) => {
    res.status(500).send("err");
})

app.listen(3000, () => {
    console.log("api started");
})