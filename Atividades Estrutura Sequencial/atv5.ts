/* Fazer um programa para ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o
código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. 
Calcule e mostre o valor a ser pago. 

Pedro Henrique Santos Roque*/

console.log("--------------------------")
console.log("Identificador de Valores de Peças")
console.log("--------------------------")


const teclado = require(`prompt-sync`) ();


let id1: number = 0;
let peca1: number = 0;
let peca2: number = 0;
let id2: number = 0;
let valorun1: number = 0;
let valorun2: number = 0;


id1 = parseInt(teclado("Qual o número de identificação da primeira peça? (ID): "))
peca1 = parseInt(teclado("Qual a quantidade de peças? "))
valorun1 = parseFloat(teclado("Qual o valor unitário da primeira peça? "))

let valortotal1 = valorun1 * peca1;

console.log(`O valor total de peças com identificação ${id1}, é de R$ ${valortotal1.toFixed(2)}`);

// ---------------------------------------------  agora é peças 2 //


id2 = parseInt(teclado("Qual o número de identificação da segunda peça? (ID): "));
peca2 = parseInt(teclado("Qual a quantidade de peças ? "));
valorun2 = parseFloat(teclado("Qual o valor unitário da segunda peça? "));

let valortotal2 = valorun2 * peca2;

console.log(`O valor total de peças com identificação ${id2}, é de R$ ${valortotal2.toFixed(2)}`);