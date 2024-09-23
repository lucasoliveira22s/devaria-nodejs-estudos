const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
});

const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero);
    if (!resultado){
        console.log('Numero invalido');
    }
    return resultado
}

const validarOperador = (operador) => {
    switch (operador) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('Operador invalido');
            return null;
    }
}

readLine.question('Favor informar um numero:', (numero1) => {
    const numeroValido1 = validarNumeroInformado(numero1);

    if(numeroValido1){
        readLine.question('Favor informar outro numero:', (numero2) => {
            const numeroValido2 = validarNumeroInformado(numero2);

            if(numeroValido2){
                readLine.question('Favor informar o operador:', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+' : console.log(`operador selecionado adição resultado ${numeroValido1} + ${numeroValido2} = ${numeroValido1 + numeroValido2}`);
                                break;
                            case '-' : console.log(`operador selecionado subtração resultado ${numeroValido1} - ${numeroValido2} = ${numeroValido1 - numeroValido2}`);
                                break;
                            case '/' : console.log(`operador selecionado divisão resultado ${numeroValido1} / ${numeroValido2} = ${numeroValido1 / numeroValido2}`);
                                break;
                            case '*' : console.log(`operador selecionado adição resultado ${numeroValido1} * ${numeroValido2} = ${numeroValido1 * numeroValido2}`);
                                break;
                            case '%' : console.log(`operador selecionado adição resultado ${numeroValido1} % ${numeroValido2} = ${numeroValido1 % numeroValido2}`);
                                break;
                            default: break;
                        }
                    }
                });
            }
        });
    }
});
