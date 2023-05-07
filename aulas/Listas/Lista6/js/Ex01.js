let pessoas = [
    {
        nome: "mônica",
        sobrenome: "santos",
        idade: 26
    },
    {
        nome: "joão",
        sobrenome: "silva",
        idade: 17
    },
    {
        nome: "helena",
        sobrenome: "vitória",
        idade: 14
    },
    {
        nome: "josé",
        sobrenome: "ferreira",
        idade: 28
    }
]

function maiorIdade(pessoas){
    for(let i = 0; i < pessoas.length; i++){
        if(pessoas[i].idade >= 18){
            console.log("Seja bem vindo! Você se chama " + pessoas.nome + " " + pessoas.sobrenome + " tem " + pessoas.idade + " anos, e é maior de idade.")
        }
        else{
            console.log("Seja bem vindo! Você se chama " + pessoas.nome + " " + pessoas.sobrenome + " tem " + pessoas.idade + " anos, e é menor de idade.")
        }
    }
}

function verificaNome(pessoas){ 
    for(let i = 0; i < pessoas.length; i++){ 
        if(pessoas[i].nome.length + pessoas[i].sobrenome.length < 3){ 
            console.log("Nome invalido, nome e sobrenome devem ser maiores que 3 caracteres. Por favor reescreva o nome: " + pessoas[i].nome + " " + pessoas[i].sobrenome + "\n") } 
        else if(pessoas[i].nome.length + pessoas[i].sobrenome.length > 50){
            console.log("Nome invalido, nome e sobrenome devem ser menores que 50 caracteres. Por favor reescreva o nome: " + pessoas[i].nome + " " + pessoas[i].sobrenome + "\n") 
            } 
        }
}
function quantidadePessoas(pessoas){ 
    console.log("Quantidade de pessoas na lista: " + pessoas.length)
}

maiorIdade(pessoas)
verificaNome(pessoas)
quantidadePessoas(pessoas)