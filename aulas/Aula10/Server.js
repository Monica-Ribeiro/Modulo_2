const express = require('express')
const app = express()
const port = 8050
const mongoose = require('mongoose')
const animal = require('./animal')
const connectionString = "mongodb+srv://adimin:admin123@appdatabase.ep93jxp.mongodb.net/"
app.use(express.json())

app.get("/listar-animais", async(req,res)=>{
    try{
        let animais = await animal.find()
        return res.status(200).json(animais)
    }catch(error){
        return res.status(500).json(error)
    }
})

app.post('/adicionar-animal', async(req,res)=>{
    let animal = {
        nome,
        raca,
        peso
    }
    try{
        await animal.create(animal)
        return res.status(201).json({message: "Animal cadastrado com sucesso!"})
    }catch(error){
        return res.status(500).json({message: error})
    }
})

mongoose.connect(connectionString,{
    dbName: "PETSHOP"
}).then(()=>{
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
}).catch((error)=>{
    console.log(error)
})
