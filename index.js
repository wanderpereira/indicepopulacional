import express from "express";
import path from "path"
import cors from "cors"
import bodyParser from "body-parser"
import {estados, ranking} from "./database/Model.js";

const app = express();
const port = 81;
const __dirname = path.resolve();

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
    res.cookie('port', port)
})

app.get('/js/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/js', 'default.js'))
})

app.get('/estados', (req, res) => {
    estados().then((results) => {
        res.json(results)
    });
})

app.post('/estados', (req, res) => {
    const {sigla, geo} = req.body;

    ranking(sigla, geo).then((results) => {
        res.json(`${results[0].estado} é o ${results[0].ranking}º estado do ranking da região ${results[0].regiao} contendo uma população igual à ${results[0].populacao} de habitantes.`)
    });
    
})


app.listen(port);
console.log('Servidor rodando em http://localhost:' + port);

