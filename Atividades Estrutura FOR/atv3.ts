/* Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de teste consiste
de 3 valores reais, cada um deles com uma casa decimal. Apresente a média ponderada para cada um destes
conjuntos de 3 valores, sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem
peso 5.

Pedro Henrique Santos Roque */

let teclado = require('prompt-sync')();

let n = parseInt(teclado('Quantos casos de teste? '));
let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

for (let i = 0; i < n; i++) {
    console.log(`Caso de teste ${i + 1}:`);
    let valor1 = teclado('Digite o primeiro valor: ');
    let valor2 = teclado('Digite o segundo valor: ');
    let valor3 = teclado('Digite o terceiro valor: ');
    let media = valor1 * peso1 + valor2 * peso2 + valor3 * peso3 / (peso1 + peso2 + peso3);
    console.log(`Média ponderada: ${media.toFixed(1)}`);
    console.log('-------------------------');
}