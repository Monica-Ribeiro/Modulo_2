let express = require('express')
let app = express()
let port = 8000

let produtos =[{
    id: 1,
    nome: "bolo de chocolate",
    valor: 25
},
{
    id: 2,
    nome: "bolo de chocolate",
    valor: 27
}
]

app.get("/produtos", function(req, res){
    return res.send(produtos)
})

app.listen(port, function(){
    console.log(`servidor rodando http://localhost:${port}´`)
})