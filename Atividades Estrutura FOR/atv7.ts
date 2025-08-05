/* Fazer um programa para ler um número inteiro positivo N. O programa deve então mostrar na tela N linhas,
começando de 1 até N. Para cada linha, mostrar o número da linha, depois o quadrado e o cubo do valor, conforme
exemplo. 

Pedro Henrique Santos Roque */

const teclado = require('prompt-sync')();

let n = parseInt(teclado('Digite um número inteiro positivo: '));

for (let i = 1; i <= n; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`);
}

