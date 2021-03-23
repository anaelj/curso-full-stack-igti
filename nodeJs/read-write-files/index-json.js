//import fs from "fs";
import { promises as fs } from "fs";

init();

async function init() {
    try {
        const arrayCarros = ["Gol", "Palio", "Uno"];
        const obj = {
            carros: arrayCarros
        }
        await fs.writeFile("teste.json", JSON.stringify(obj));
        const data = JSON.parse(await fs.readFile("teste.json"));
        data.carros.push("Sandero");
        await fs.writeFile("teste.json", JSON.stringify(data));
        console.log(data);

    } catch (error) {
        console.log(error)
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