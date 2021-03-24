import express from "express";
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

const app = express();
app.use(express.json());

app.listen(3000, async () => {
    try {
        const cidades = JSON.parse(await readFile("Cidades.json"));
        const estados = JSON.parse(await readFile("Estados.json"));

        const arrayQtd = [];
        const arrayQtd5 = [];
        const arrayMaiorNome = [];

        let soma5mais = 0;
        let soma5menos = 0;

        estados.map(uf => {
            //            console.log(uf);
            const cidadeUF = cidades.filter(cid => cid.Estado == uf.ID);

            arrayQtd.push({ sigla: uf.Sigla, qtd: cidadeUF.length });

            if (cidadeUF.length > 398) {
                arrayQtd5.push({ sigla: uf.Sigla, qtd: cidadeUF.length });
                soma5mais = soma5mais + cidadeUF.length;
            }
            if (cidadeUF.length < 62) {
                soma5menos = soma5menos + cidadeUF.length;
            }

            cidadeUF.map(ciduf => {
                arrayMaiorNome.push({ sigla: uf.Sigla, nmeCidade: ciduf.Nome, tamanho: ciduf.Nome.length });
            })

            //            writeFile('./cidades/' + uf.Sigla + '.json', JSON.stringify(cidadeUF, null, 2));
            //            console.log(uf);


        })

        console.log("soma 5 mais:" + soma5mais);
        console.log("soma 5 menos:" + soma5menos);

        const crescente = arrayQtd.sort(function (a, b) {
            if (a.qtd > b.qtd) {
                return 1;
            }
            if (a.qtd < b.qtd) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

        console.log(crescente);

        const arrayMaiorNome2 = arrayMaiorNome.filter(cdd => cdd.tamanho < 4);

        const crescenteNome = arrayMaiorNome2.sort(function (a, b) {
            if (a.tamanho > b.tamanho) {
                return 1;
            }
            if (a.qtd < b.qtd) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

        //      console.log(crescenteNome);

        //        console.log(estados);


    } catch (error) {
    }


})