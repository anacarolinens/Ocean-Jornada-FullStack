const express = require ("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello, World!");
});

app.get("/oi", function(req, res){
    res.send("Olá, mundo!")
})
//Criar a lista com as pontuações

const list = [
    {
        id: 1, 
        nome: "Ana",
        pontos: 90, 
    },
    {
        id: 2, 
        nome: "Carol",
        pontos: 91, 
    },
    {
        id: 3 , 
        nome: "Lia",
        pontos: 95, 
    },
];
//Endpoint READ ALL - [get] /pontuacoes
app.get("/pontuacoes", function (req, res){
    res.send("Ler todas as pontuações");
});

//Endpoint CREATE - 

app.listen(3000);
