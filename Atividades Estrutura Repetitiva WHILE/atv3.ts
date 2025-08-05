/* Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes.
 Escreva um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 
 1.Álcool 2.Gasolina 3.Diesel 4.Fim).
 Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até
que seja válido). O programa será encerrado quando o código informado for o número 4. Deve ser escrito a
mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo de combustível, conforme
exemplo.

Pedro Henrique Santos Roque */

console.log("Verificação de combustível: ");
const teclado = require(`prompt-sync`)();

let opcao: number = 0;
let gasolina: number = 0;
let alcool: number = 0;
let diesel: number = 0;
let pessoas: number = 0;

while (opcao != 4) {
    console.log(`Digite o código do combustível: `);
     opcao = parseInt(teclado(`1.Álcool 2.Gasolina 3.Diesel 4.Fim: `));

    if (opcao == 1) {
        alcool++;
    } else if (opcao == 2) {
        gasolina++;
    } else if (opcao == 3) {
        diesel++;
    } else if (opcao == 4) {
        break;
    } else {
        console.log(`Código inválido! Digite novamente.`);
    }
}


console.log(`Muito Obrigado!`);
console.log(`Álcool: ${alcool} `);   
console.log(`Gasolina: ${gasolina} `);
console.log(`Diesel: ${diesel} `);
console.log(`Total de pessoas que abasteceram : ${alcool + gasolina + diesel} `);



 while (opcao != 4);


