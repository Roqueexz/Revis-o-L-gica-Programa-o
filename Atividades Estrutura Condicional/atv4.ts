/* Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode
começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas. 

Pedro Henrique Santos Roque */

console.log("Calcule a duração de um jogo: ");
const teclado = require(`prompt-sync`)();

let horaInicial = parseInt(teclado("Digite a hora inicial do jogo (0-23): "));
let horaFinal = parseInt(teclado("Digite a hora final do jogo (0-23): "));
let duracao: number = 0;

if (horaInicial < horaFinal) {
    duracao = horaFinal - horaInicial;
}
else {
    duracao = (24 - horaInicial) + horaFinal;
}
console.log(`A duração do jogo foi de ${duracao} hora(s).`);


