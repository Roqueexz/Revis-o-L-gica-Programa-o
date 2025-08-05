/* Fazer um programa para ler um número N. Depois leia N pares de números e mostre a divisão do primeiro pelo
segundo. Se o denominador for igual a zero, mostrar a mensagem "divisao impossivel".

Pedro Henrique Santos Roque */

const teclado = require('prompt-sync')();
let n = parseInt(teclado('Quantos casos de teste? '));

for (let i = 0; i < n; i++) {
    console.log(`Caso de teste ${i + 1}:`);
    let valor1 = parseFloat(teclado('Digite o valor do numerador: '));
    let valor2 = parseFloat(teclado('Digite o valor do denominador: '));
    
    if (valor2 == 0) {
        console.log('Divisão impossível');
    } else {
        let resultado = valor1 / valor2;
        console.log(`Resultado: ${resultado.toFixed(1)}`);
    }
    console.log('-------------------------');
}