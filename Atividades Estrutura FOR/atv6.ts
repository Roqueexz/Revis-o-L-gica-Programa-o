/* Ler um número inteiro N e calcular todos os seus divisores.

Pedro Henrique Santos Roque */

const teclado = require('prompt-sync')();
let n = parseInt(teclado('Digite um número inteiro para calcular seus divisores: '));

console.log(`Os divisores de ${n} são:`);

for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log(i);
    }
}

