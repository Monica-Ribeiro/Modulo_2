var pessoas= [ 
    pessoa1 = { 
        nome: "Mônica", 
        idade: 26, 
        ehAdmin: true, 
        email: "monica.santos@gmail.com" 
    },
    pessoa2 = { 
        nome: "Mateus", 
        idade: 24, 
        ehAdmin: false, 
        email: "mateus.sribeiro@outlook.com" 
    },
    pessoa3 = { 
        nome: "Miguel", 
        idade: 22, 
        ehAdmin: false, 
        email: "miguel.ribeiro@hotmail.com" 
    },
    pessoa4 = { 
        nome: "Rosemeire", 
        idade: 45, 
        ehAdmin: false, 
        email: "rosemeire_sntos@gmail.com" 
    },
    pessoa5 = { 
        nome: "Clodoaldo", 
        idade: 50, 
        ehAdmin: true, 
        email: "clodo.123@hotmail.com" 
    }]

    for(let i= 0; i < pessoas.length; i++){ 
        if(pessoas[i].ehAdmin == true){
            console.log("Olá " + pessoas[i].nome + "! Bem vindo(a) você é admin do sistema, enviamos um email para " + pessoas[i].email + " para você criar uma senha")
        } 
        else{ 
            console.log("Olá " + pessoas[i].nome + "! Bem vindo(a) você não é admin do sistema, enviamos um email para " + pessoas[i].email + " para você criar uma senha")
        }
    }