const mongoose = require('mongoose')

const animalSchema = mongoose.Schema({
    nome: {type: String, required: true},
    nome: {type: String, required: true},
    nome: {type: String, required: true}
})

const animal = mongoose.model('Animais', animalSchema)

module.exports = animal