let express = require('express')
let app = express()
let port = 8000

let bandas = [
    {
        nomeBanda: "Mothionless in White",
        principaisMusicas: ["Timebomb", "Sinematic", "Another life"],
        integrantes: [{
            nome: "Cris Monthionless",
            paisDeOrigem: "pais tal",
            idade: 36
        },
        {
            nome: "Chuk",
            paisDeOrigem: "pais tal",
            idade: 39
        }
        ]
    },
    {
        nomeBanda: "Evanescence",
        principaisMusicas: ["Going under", "Immortal", "Bring me to life"],
        integrantes: [{
            nome: "Amy Lee",
            paisDeOrigem: "Pais tal tal",
            idade: 38
        },
        {
            nome: "James",
            paisDeOrigem: "Pais tal tal",
            idade: 47
        }
        ]
    }
]

app.get("/bandas", function(req, res){
    return res.send(bandas)
})

app.listen(port, function(){
    console.log(`´Servidor rodando http://localhost:${port}`)
})