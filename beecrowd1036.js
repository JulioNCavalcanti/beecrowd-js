/*
    Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. 
    Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, 
    caso haja uma divisão por 0 ou raiz de numero negativo.

    Entrada:
    Leia três valores de ponto flutuante (double) A, B e C.

    Saída:
    Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". 
    Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem 
    correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var informacoesDaLinha1 = lines.shift().split(" ");

let A = parseFloat(informacoesDaLinha1.shift());
let B = parseFloat(informacoesDaLinha1.shift());
let C = parseFloat(informacoesDaLinha1.shift());

let delta = Math.pow(B, 2) - 4 * A * C;

if (delta > 0 && A != 0) {
    let x1 = (-B + Math.sqrt(delta)) / (2 * A);
    let x2 = (-B - Math.sqrt(delta)) / (2 * A);

    console.log("R1 = " + x1.toFixed(5));
    console.log("R2 = " + x2.toFixed(5));
} else {
    console.log("Impossivel calcular");
}