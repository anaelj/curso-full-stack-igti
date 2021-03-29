import express from "express";
import gradesRouter from "./routes/grades.js";
import { promises as fs } from "fs";
import cors from "cors";


const { readFile, writeFile } = fs;

const app = express();
app.use(express.json());
app.use(cors());

global.fileName = "grades.json";

app.use("/grade", gradesRouter);

app.listen(3000, async () => {
    try {
        await readFile(global.fileName);
    } catch (error) {
        const initialJson = {
            nextId: 1,
            accounts: []
        }

        writeFile(global.fileName, JSON.stringify(initialJson)).then(() => { });
    }


})