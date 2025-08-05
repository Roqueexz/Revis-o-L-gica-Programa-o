/* Fazer um programa para ler um número inteiro, e depois dizer se este número é negativo ou não. 

Pedro Henrique Santos Roque */


console.log("Digite um número inteiro: ");

const teclado = require(`prompt-sync`)();

let numero = parseInt(teclado("Digite o valor do número inteiro: "));

if (numero < 0) {
    console.log("O número é negativo.");
}
else {
    console.log("O número não é negativo.");
}


