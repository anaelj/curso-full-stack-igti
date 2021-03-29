import express from "express";
import { promises as fs, read } from "fs";

const { readFile, writeFile } = fs;

const router = express.Router();

router.post("/", async (req, res, next) => {
    console.log(req.body);

    try {
        let grade = req.body;
        const data = JSON.parse(await readFile(global.fileName));

        if (!grade.student) {
            throw new Error("Nome e balance são obrigatórios.");
        }

        grade = { id: data.nextId++, ...grade };

        data.grades.push(grade);
        await writeFile(global.fileName, JSON.stringify(data, null, 2));

        res.send(grade);
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
        const grade = data.grades.find(grade => grade.id === parseInt(req.params.id));
        res.send(grade);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
});

router.get("/05/:student/:subject", async (req, res, next) => {
    //    console.log(req.params.student);
    //console.log(req.params.subject);
    try {
        const data = JSON.parse(await readFile(global.fileName));
        let grade = data.grades.filter(grade => grade.student === req.params.student && grade.subject === req.params.subject);

        const soma = grade.reduce(
            (acumulador, valorAtual) => acumulador + valorAtual.value
            , 0
        );


        grade = { soma, media: soma / grade.length, ...grade };

        console.log(soma);

        res.send(grade);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
});

router.get("/06/:subject/:type", async (req, res, next) => {
    //    console.log(req.params.student);
    //console.log(req.params.subject);
    try {
        const data = JSON.parse(await readFile(global.fileName));
        let grade = data.grades.filter(grade => grade.type === req.params.type && grade.subject === req.params.subject);

        const soma = grade.reduce(
            (acumulador, valorAtual) => acumulador + valorAtual.value
            , 0
        );


        grade = { soma, media: soma / grade.length, ...grade };

        console.log(soma);

        res.send(grade);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
});

router.get("/07/:subject/:type", async (req, res, next) => {
    //    console.log(req.params.student);
    //console.log(req.params.subject);
    try {
        const data = JSON.parse(await readFile(global.fileName));
        let grade = data.grades.filter(grade => grade.type === req.params.type && grade.subject === req.params.subject);
        grade = grade.sort((a, b) => b.value - a.value);
        res.send([grade[0], grade[1], grade[2]]);

    } catch (error) {
        res.status(400).send({ error: error.message })
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        data.grades = data.grades.filter(grade => grade.id !== parseInt(req.params.id));

        await writeFile(global.fileName, JSON.stringify(data, null, 2));

        res.send(data);
    } catch (error) {
        next(error);
    }
});

router.put("/", async (req, res, next) => {
    try {
        const grade = req.body;

        const data = JSON.parse(await readFile(global.fileName));
        const index = data.grades.findIndex(a => a.id === grade.id);

        data.grades[index] = grade;

        await writeFile(global.fileName, JSON.stringify(data, null, 2));

        res.send(grade);
    } catch (error) {
        next(error);
    }
});

router.use((error, req, res, next) => {
    res.status(400).send({ error: error.message });
})


export default router;