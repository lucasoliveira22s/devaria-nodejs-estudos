const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e tem habilitação para saber se você pode entrar no kart');
console.log('Alem das suas verificações, precisamos saber se você está na lista de presença do horario');

readLine.question('Qual o ano de seu nascimento?', ano => {

    if(ano > 2004){
        console.log('Você não tem 18 anos');
    }else{
        readLine.question('Você tem habilitação? (Sim/Não)', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Você não tem habilitação para entrar no kart');
            }else{
                readLine.question('Qual seu nome?', nome => {
                    switch(nome){
                        case 'Lucas':
                            console.log('Sejá bem vindo ao kart Lucas!');
                            break;
                        case 'Miguel':
                            console.log('Sejá bem vindo ao kart Miguel!');
                            break;
                        default:
                            console.log('Seu nome não foi indentificado na lista de presença');
                    }
                });
            }
        });
    }
});