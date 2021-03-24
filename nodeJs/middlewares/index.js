import express from "express";
import carrosRouter from "./carrosRouter.js";

const app = express();
app.use(express.json());

app.use("/carros", carrosRouter);

app.listen(3000, () => {
    console.log("api started");
})