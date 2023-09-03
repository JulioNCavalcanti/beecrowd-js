/*
    Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", 
    indicando se os valores lidos são múltiplos entre si.

    Entrada:
    A entrada contém valores inteiros.

    Saída:
    A saída deve conter uma das mensagens conforme descrito acima.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var informacoesDaLinha1 = lines.shift().split(' ');

let A = parseInt(informacoesDaLinha1.shift());
let B = parseInt(informacoesDaLinha1.shift());

if (A % B === 0 || B % A === 0) {
    console.log('Sao Multiplos');
} else {
    console.log('Nao sao Multiplos');
}