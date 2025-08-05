/* Fazer um programa que leia o número de um funcionário, seu número de horas trabalhadas,
 o valor que recebe por  hora e calcula o salário desse funcionário. 
 A seguir, mostre o número e o salário do funcionário, com duas casas  decimais. 

 Pedro Henrique Santos Roque */

 
const teclado = require(`prompt-sync`)();

 let idfuncionario: number;
 let horastrabalhadas: number;
 let salariohora: number;
 let salariototal: number;


idfuncionario = teclado((`Qual o ID do funcionário ? `));
horastrabalhadas = teclado((`Quantas horas esse funcionário trabalha por mês? (Por padrão 220 horas mensais.) `));
salariohora = parseFloat(teclado((`Quanto esse funcionário recebe por hora trabalhada? (Salário Mínimo = R$6,90/h) `)));

salariototal = salariohora * horastrabalhadas


console.log(`O salário do funcionário com número de identificação ${idfuncionario}, tende a receber: `)
console.log(`R$${salariototal.toFixed(2)}`);








