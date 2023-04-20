var contaCorrente = {
    saldo: 1500,
    faturaAtual: 2500,
    creditoDisponivel: 450,
    exibirExtrato: true,
    extrato: {
        entradas:{
            data: "20/04/2023",
            valor: 250
        },
        saidas:{
            data: "20/04/2023",
            valor: 250,
            descricao: "Pagamento de Fatura"
        }
    }
}
console.log("DADOS CONTA CORRENTE: ", contaCorrente)

if(contaCorrente.saldo >= contaCorrente.faturaAtual){
    console.log("Você possui saldo para pagar a fatura atual")
    console.log(contaCorrente.extrato)
}
else if(contaCorrente.saldo < contaCorrente.faturaAtual){
    console.log("você não possui saldo suficiente para pagar a fatura, experimente pegar credito para conseguir pagar.")
    console.log("Crédito disponivel: ", contaCorrente.creditoDisponivel)
    console.log("Extrato: ", contaCorrente.extrato)
}
else{
    console.log("Comando inválido, tente novamente!")
}