/*
    Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir 
    calcule a duração do jogo.

    Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

    Entrada:
    Quatro números inteiros representando a hora de início e fim do jogo.

    Saída:
    Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” . 
*/

const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const informacoesDaLinha1 = lines.shift().split(' ');

const horaInicial = parseInt(informacoesDaLinha1.shift());
const minutoInicial = parseInt(informacoesDaLinha1.shift());
const horaFinal = parseInt(informacoesDaLinha1.shift());
const minutoFinal = parseInt(informacoesDaLinha1.shift());

let duracaoEmHoras = 0;
let duracaoEmMinutos = 0;

if (horaInicial < horaFinal) {
    duracaoEmHoras = horaFinal - horaInicial;
} else if (horaInicial > horaFinal) {
    duracaoEmHoras = (24 - horaInicial) + horaFinal;
} else if (horaFinal === horaInicial && minutoFinal > minutoInicial) {
    duracaoEmHoras = 0;
} else {
    duracaoEmHoras = 24;
}

if (minutoInicial < minutoFinal) {
    duracaoEmMinutos = minutoFinal - minutoInicial;
} else if (minutoInicial > minutoFinal) {
    duracaoEmMinutos = (60 - minutoInicial) + minutoFinal;
    duracaoEmHoras--;
} else {
    duracaoEmMinutos = 0;
}

console.log('O JOGO DUROU ' + duracaoEmHoras + ' HORA(S) E ' + duracaoEmMinutos + ' MINUTO(S)');