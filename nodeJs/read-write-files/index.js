//import fs from "fs";
import { promises as fs } from "fs";

init();

async function init() {
    try {
        await fs.writeFile("teste.txt", "bla bla bla");
        await fs.appendFile("teste.txt", "\nteste append file");
        const data = await fs.readFile("teste.txt", "utf-8");
        console.log(data);
    } catch (error) {

    }
}


/*
fs.writeFile("teste.txt", "bla bla bla", (erro) => {
    if (erro) {
        console.log(erro);
    } else {
        fs.appendFile("teste.txt", "\nteste append file\n", (erro) => {
            if (erro) {
                console.log(erro);
            } else {
                fs.readFile("teste.txt", "utf-8", (erro, data) => {
                    if (erro) {
                        console.log(erro);
                    } else {
                        console.log(data);
                    }
                })
            }
        })
    }
});
*/

/*
try {
    fs.writeFileSync("teste.txt", "bla bla bla sync");
    const data = fs.readFileSync("teste.txt", "utf-8");
    console.log(data);
} catch (error) {
    console.log(error);
}
*/