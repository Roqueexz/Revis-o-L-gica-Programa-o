/* Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema
cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo
menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).

Pedro Henrique Santos Roque */

console.log("Verificação de coordenadas: ");
const teclado = require(`prompt-sync`)();

let x: number;
let y: number;

do {
    x = parseFloat(teclado("Digite a coordenada X: "));
    y = parseFloat(teclado("Digite a coordenada Y: "));

    if (x > 0 && y > 0) {
        console.log("Primeira");
    } else if (x < 0 && y > 0) {
        console.log("Segunda");
    } else if (x < 0 && y < 0) {
        console.log("Terceira");
    } else if (x > 0 && y < 0) {
        console.log("Quarta");
    }
} while (x != 0 || y != 0);