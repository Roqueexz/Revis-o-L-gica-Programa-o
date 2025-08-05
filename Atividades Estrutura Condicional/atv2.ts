/* Fazer um programa para ler um número inteiro e dizer se este número é par ou ímpar. 

Pedro Henrique Santos Roque */

console.log("Verifique a paridade de um número: ");
const teclado = require(`prompt-sync`)();

let numero = parseInt(teclado("Digite o valor do número inteiro:"));

if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
}
else {
    console.log(`O número ${numero} é ímpar.`);
}

