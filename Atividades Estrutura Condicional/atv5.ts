/* Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A
seguir, calcule e mostre o valor da conta a pagar.

Pedro Henrique Santos Roque */

console.log("Lojinha do Zé Mateus");

const teclado = require("prompt-sync")();

console.log(`------------------------------`)
console.log(`Código 1: Cachorro Quente - R$ 4.00`);
console.log(`Código 2: X-Salada - R$ 4.50`);
console.log(`Código 3: X-Bacon - R$ 5.00`);
console.log(`Código 4: Torrada Simples - R$ 2.00`);
console.log(`Código 5: Refrigerante - R$ 1.50`);
console.log(`------------------------------`);  

let opcao: number = parseInt(teclado("Código do item: "));
let quantidade: number = parseInt(teclado("Quantidade: "));
let valor: number = 0;

if (opcao === 1) {
    valor = quantidade * 4.00;
    console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`);
}
else if (opcao === 2) {
    valor = quantidade * 4.50;
    console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`);
} else if (opcao === 3) {
    valor = quantidade * 5.00;
    console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`);
} else if (opcao === 4) {
    valor = quantidade * 2.00;
    console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`);
} else if (opcao === 5) {
    valor = quantidade * 1.50;
    console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`);
} else {
    console.log("Código inválido.");
}

