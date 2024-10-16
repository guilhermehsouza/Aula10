const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: 'mysqlfatec',
    database: 'aulabd'
});

// Conectando ao banco de dados
db.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar ao MySQL:', erro);
    } else {
        console.log('Conectado ao MySQL com sucesso!');
    }
});


