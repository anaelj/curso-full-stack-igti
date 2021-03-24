import express from "express";
import accountsRouter from "./routes/accounts.js";
import { promises as fs } from "fs";
import winston from "winston";
import cors from "cors";


const { readFile, writeFile } = fs;

const app = express();
app.use(express.json());
app.use(cors());

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label} ${level}: ${message}]`;
})

global.fileName = "accounts.json";
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "my-bank-api.log" })
    ],
    format: combine(
        label({ label: "my-bank-api" }),
        timestamp(),
        myFormat
    )
})

app.use("/account", accountsRouter);

app.listen(3000, async () => {
    try {
        await readFile(global.fileName);
        global.logger.info("Api Started");
    } catch (error) {
        global.logger.error(error);
        const initialJson = {
            nextId: 1,
            accounts: []
        }
        writeFile(global.fileName, JSON.stringify(initialJson)).then(() => { });
    }


})