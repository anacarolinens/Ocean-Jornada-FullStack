const express = require ("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello, World!");
});

app.get("/oi", function(req, res){
    res.send("Olá, mundo!")
})

app.listen(3000, () =>
    console.log("Servidor rodando em https://3000-anacaroline-oceanjornad-ev0lhfps24a.ws-us59.gitpod.io/")
    
);
