/* Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o
X, se for o caso. Usando o laço For 

Pedro Henrique Santos Roque */ 

const teclado = require('prompt-sync')();

let x = parseInt(teclado('Digite um valor inteiro X (1 <= X <= 1000): '));
for (let i = 1; i <= x; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
