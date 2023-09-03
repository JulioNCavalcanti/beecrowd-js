/*
    Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, 
    calcule o perímetro do triângulo e apresente a mensagem:

    -- Perimetro = XX.X

    Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando 
    a mensagem

    -- Area = XX.X

    Entrada:
    A entrada contém três valores reais.

    Saída:
    O resultado deve ser apresentado com uma casa decimal.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var informacoesDaLinha1 = lines.shift().split(' ');

let A = parseFloat(informacoesDaLinha1.shift());
let B = parseFloat(informacoesDaLinha1.shift());
let C = parseFloat(informacoesDaLinha1.shift());

if (A + B > C && A + C > B && B + C > A) {
    let perimetro = A + B + C;
    console.log('Perimetro = ' + perimetro.toFixed(1));
} else {
    let area = ((A + B) * C) / 2;
    console.log('Area = ' + area.toFixed(1));
}