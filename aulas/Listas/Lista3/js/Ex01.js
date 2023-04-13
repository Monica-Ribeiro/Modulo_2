var banda = {
    nomeBanda: "Mothionless In White",
    anoLancamento: 2005,
    estiloMusical: "Metalcore, Gothic metal, Metal industrial, Metal alternativo, Nu metal"
}

var integrante1 = {
    NomeCompleto: "Christopher Thomas Cerulli",
    paisOrigem: "Scranton, Pensilvânia - EUA",
    idade: 36

}

var integrante2 = {
    NomeCompleto: "Ricky Olson",
    paisOrigem: "Seattle, Washington - EUA",
    idade: 34

}

var integrante3 = {
    NomeCompleto: "Ryan Sitkowski",
    paisOrigem: "Pensilvânia, EUA",
    idade: 32

}

var informacoesIntegrantes = []
informacoesIntegrantes.push(integrante1)
informacoesIntegrantes.push(integrante2)
informacoesIntegrantes.push(integrante3)

var melhoreMusicas = {
    musica1: "Another Life", 
    musica2: "TimeBomb", 
    musica3:   "Meltdown", 
    musica4: "Eternally Yours", 
    musica5: "Sinematic"
}

var musicas = []
musicas.push(melhoreMusicas)


var database = []
database.push(banda)
database.push(informacoesIntegrantes)
database.push(musicas)
console.log(database)

database.sort()
console.log(database)

database.pop()
console.log(database)