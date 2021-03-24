import express from "express";
import accountsRouter from "./routes/accounts.js";
import { promises as fs, read, writeFileSync } from "fs";

const { readFile, writeFile } = fs;

const app = express();
app.use(express.json());

global.fileName = "accounts.json";

app.use("/account", accountsRouter);

app.listen(3000, async () => {
    console.log("api started");

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