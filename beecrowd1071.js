/*
    Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.

    Entrada:
    O arquivo de entrada contém dois valores inteiros.

    Saída:
    O programa deve imprimir um valor inteiro. Este valor é a soma dos valores ímpares que estão entre 
    os valores fornecidos na entrada que deverá caber em um inteiro.
*/

const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const X = parseInt(lines.shift());
const Y = parseInt(lines.shift());

let maior = X > Y ? X : Y;
let menor = X < Y ? X : Y;

let somaDosInteiros = 0;

for (let i = menor + 1; i < maior; i++) {
    if (i % 2 !== 0) {
        somaDosInteiros += i;
    }
}

console.log(somaDosInteiros);