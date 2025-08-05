/* Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao
Multiplos", indicando se os valores lidos são múltiplos entre si. Atenção: os números devem poder ser digitados em
ordem crescente ou decrescente. */ 

console.log("Verifique se dois números são múltiplos: ");
const teclado = require(`prompt-sync`)();


let A = parseInt(teclado("Digite o primeiro valor inteiro (A): "));
let B = parseInt(teclado("Digite o segundo valor inteiro (B): "));

if (A % B === 0 || B % A === 0) {
    console.log(`Os números ${A} e ${B} são múltiplos.`);
}else {
    console.log(`Os números ${A} e ${B} não são múltiplos.`);
}

