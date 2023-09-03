/*
    Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, 
    e informe-o expresso no formato horas:minutos:segundos.

    Entrada:
    O arquivo de entrada contém um valor inteiro N.

    Saída:
    Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, 
    conforme exemplo fornecido.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let tempoDeDuracaoEmSegundos = parseInt(lines.shift());

let horas = parseInt(tempoDeDuracaoEmSegundos / 3600);
tempoDeDuracaoEmSegundos %= 3600;

let minutos = parseInt(tempoDeDuracaoEmSegundos / 60);
tempoDeDuracaoEmSegundos %= 60;

let segundos = tempoDeDuracaoEmSegundos;

console.log(horas + ":" + minutos + ":" + segundos);