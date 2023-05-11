let express = require('express')
let app = express()
let port = 8000

let usuario = [
    {
        nomeUsuario: "Mônica",
        criadoEm: "São Paulo",
        idade: 25,
        email: "monica@gmail.com",
        isAdmin: true,
        telefone: 1234567890,
        endereco: "Rua tal nº tal"
    },
    {
        nomeUsuario: "João",
        criadoEm: "Rio de Janeiro",
        idade: 37,
        email: "joao@gmail.com",
        isAdmin: true,
        telefone: 44455566677,
        endereco: "Rua tal nº tal"
    },
    {
        nomeUsuario: "Andressa",
        criadoEm: "Fortaleza",
        idade: 47,
        email: "andressa@gmail.com",
        isAdmin: false,
        telefone: 11445566677,
        endereco: "Rua tal nº tal"
    },
    {
        nomeUsuario: "Guilherme",
        criadoEm: "Santa Catarina",
        idade: 47,
        email: "guilherme@gmail.com",
        isAdmin: False,
        telefone: 11445566579,
        endereco: "Rua tal nº tal"
    },
    {
        nomeUsuario: "Fernando",
        criadoEm: "Tocantins",
        idade: 57,
        email: "jandressa@gmail.com",
        isAdmin: true,
        telefone: 11234265687,
        endereco: "Rua tal nº tal"
    }
]

app.get("/usuario", function(req, res){
    return res.send(usuario)
})

app.listen(port, function(){
    console.log(`´Servidor rodando http://localhost:${port}`)
})