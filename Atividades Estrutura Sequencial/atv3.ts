/*Fazer um programa para ler quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença 
do produto  de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D). 

Pedro Henrique Santos Roque */

const teclado = require (`prompt-sync`)();

let vA: number = 0;
let vB: number = 0;
let vC: number = 0;
let vD: number = 0;

let produtoAB: number = 0;
let produtoCD: number = 0;

const diferenca = produtoAB - produtoCD

console.log("Calculando o valor da diferença entre a multiplicação de A e B, por C e D");

vA = parseInt(teclado("Digite o valor de A: "));
vB = parseInt(teclado("Digite o valor de B: "));
vC = parseInt(teclado("Digite o valor de C: "));
vD = parseInt(teclado("Digite o valor de D: "));

produtoAB = vA * vB;
produtoCD = vC * vD;

console.log(`O valor da diferença dos produtos é de ${diferenca}`);
