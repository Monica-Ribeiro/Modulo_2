"use strict";
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    getNome() {
        return this._nome;
    }
    setNome(nome) {
        this._nome = nome;
    }
    getIdade() {
        return this._idade;
    }
    setIdade(idade) {
        this._idade = idade;
    }
}
let p1 = new Pessoa("Fulano", 10);
