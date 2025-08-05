/* Fazer um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e
mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B. 

Pedro Henrique Santos Roque*/ 

const teclado = require(`prompt-sync`)();
const pi: number = 3.14159;

let A: number = 0;
let B: number = 0; 
let C: number = 0;

console.log("A cada etapa, defina os valores a serem utilizados, por padrão eles são algebricamente nomeados de A, B e C.");

 // A) area do triangulo que tem A por base e C por altura //

console.log("Calculando Area do Triângulo ")
console.log("PS: Os valores a serem utilizados: A é a base e C é a altura. ");

A = parseFloat(teclado("Qual será o valor de A em metros? (Por padrão o valor é 0) "))
C = parseFloat(teclado("Qual será o valor de C em metros ? (Por padrão o valor é 0) "))

let areadotriangulo = A*C;

console.log(`O valor da area do triângulo é de ${areadotriangulo.toFixed(2)} metros`)

// b) a área do círculo de raio C. (pi = 3.14159)

console.log("Calculando Aréa do Círculo");
console.log("PS: Os valores a serem utilizados serão de PI, e como raio do círculo será o valor definido de C");

C = parseFloat(teclado("Qual será o valor de C em metros ? "));

let areadocirculo = pi * (C * C);

console.log(`O valor da Área do Círculo é de ${areadocirculo.toFixed(2)} metros`);

// c) a área do trapézio que tem A e B por bases e C por altura.

console.log("Calculando Área do Trapézio"); 
console.log("PS: Os valores a serem utilizados serão de A e B como bases e C como altura.")

A = parseFloat(teclado("Qual será o valor de A em metros ?  "))
B = parseFloat(teclado("Qual será o valor de C em metros ?  "))
C = parseFloat(teclado("Qual será o valor de C em metros ?  "))


let areadotrapezio = (A+B) * (C/2)


console.log(`O valor da Área do Trapézio é de ${areadotrapezio.toFixed(2)} metros.`);

// d) a área do quadrado que tem lado B.

console.log("Calculando Área do Quadrado");
console.log("PS: Os valores a serem utilizados será de B como valor dos lados do quadrado.")

B = parseFloat(teclado("Qual será o valor de C em metros ?  "))

let areadoquadrado = B * B;

console.log(`O valor da Área do Quadrado é de ${areadoquadrado} metros. `);


//E) a área do retângulo que tem lados A e B.

console.log("Calculando Área do Retângulo");
console.log("Os valores a serem utilizados serão de A e B como o valor dos lados.");

A = parseFloat(teclado("Qual será o valor de C em metros ?  "))
B = parseFloat(teclado("Qual será o valor de C em metros ?  "))

let areadoretangulo = A*B

console.log(`O valor da Área do Retângulo é de ${areadoretangulo} metros`);

//faz um exercicio menor ;( //






