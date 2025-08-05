/* Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando
essas informações conforme exemplo (use a palavra "in" para dentro do intervalo, e "out" para fora do intervalo).

Pedro Henrique Santos Roque */

const teclado = require('prompt-sync')();

let n = parseInt(teclado('Digite a quantidade de valores inteiros N: '));
let dentro = 0;
let fora = 0;

for (let i = 0; i < n; i++) {
    let x = parseInt(teclado(`Digite o valor inteiro ${i + 1}: `));
    if (x >= 10 && x <= 20) {
        dentro++;
    } else {
        fora++;
    }
}

console.log(`${dentro} in`);
console.log(`${fora} out`);
