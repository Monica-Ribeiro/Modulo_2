const express = require('express')
const app = express()
const port = 8050
app.use(express.json())

let bancoDeDadosProdutos = []

app.get('/produtos',(req, res) => {
    return res.status(200).json(bancoDeDadosProdutos)
})

app.post('/adicionar-produto', (req, res) =>{
    let body = res.body
    console.log(body)
    bancoDeDadosProdutos.push(body)
    return res.status(201).json('Produto cadastrado com sucesso!!')
})

app.listen(port, () => {
    console.log(`Servidor rodando http://localhost${port}`)
})