/* Faça um programa para ler dois valores inteiros, e depois mostrar na tela a 
soma desses números com uma  mensagem explicativa, conforme exemplos. 

Pedro Henrique Santos Roque - N° 27 */ 

const teclado = require(`prompt-sync`)();

console.log("---------------------")
console.log(`Calculadora de Soma`)
console.log("---------------------")


let n1: number;
let n2: number;
let soma: number;

n1 = parseInt(teclado("Digite o valor do primeiro número"));
n2 = parseInt(teclado("Digite o valor do segundo número"));

soma = n1 + n2;

console.log(`O valor da soma é igual a ${soma} `);
