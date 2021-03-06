import express from "express";
import { promises as fs, read, writeFileSync } from "fs";

const { readFile, writeFile } = fs;

const router = express.Router();

router.post("/", async (req, res, next) => {
    console.log(req.body);

    try {
        let account = req.body;
        const data = JSON.parse(await readFile(global.fileName));

        if (!account.name || account.balance === null) {
            throw new Error("Nome e balance são obrigatórios.");
        }

        account = { id: data.nextId++, ...account };

        data.accounts.push(account);
        await writeFile(global.fileName, JSON.stringify(data, null, 2));

        res.send(account);
    } catch (error) {
        next(error);
    }
})

router.get("/", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        delete data.nextId;
        res.send(data);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        const account = data.accounts.find(account => account.id === parseInt(req.params.id));
        res.send(account);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        data.accounts = data.accounts.filter(account => account.id !== parseInt(req.params.id));

        await writeFile(global.fileName, JSON.stringify(data, null, 2));

        res.send(data);
    } catch (error) {
        next(error);
    }
});

router.put("/", async (req, res, next) => {
    try {
        const account = req.body;

        const data = JSON.parse(await readFile(global.fileName));
        const index = data.accounts.findIndex(a => a.id === account.id);

        data.accounts[index] = account;

        await writeFile(global.fileName, JSON.stringify(data, null, 2));

        res.send(account);
    } catch (error) {
        next(error);
    }
});

router.patch("/updateBalance", async (req, res, next) => {
    try {
        const account = req.body;

        const data = JSON.parse(await readFile(global.fileName));
        const index = data.accounts.findIndex(a => a.id === account.id);

        data.accounts[index].balance = account.balance;

        await writeFile(global.fileName, JSON.stringify(data, null, 2));

        res.send(account);
    } catch (error) {
        next(error);
    }
});

router.use((error, req, res, next) => {
    global.logger.error(error);
    res.status(400).send({ error: error.message });

})


export default router;