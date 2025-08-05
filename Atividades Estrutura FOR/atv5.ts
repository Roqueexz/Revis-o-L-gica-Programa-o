/* Ler um valor N. Calcular e escrever seu respectivo fatorial. Fatorial de N = N * (N-1) * (N-2) * (N-3) * ... * 1.
Lembrando que, por definição, fatorial de 0 é 1. 

Pedro Henrique Santos Roque */


const teclado = require('prompt-sync')();
let n = parseInt(teclado('Digite um número para calcular o fatorial: '));

let fatorial: number = 1;

for (let i = n; i > 1; i--) {
    fatorial *= i;
}

console.log(`O fatorial de ${n} é ${fatorial}`);

