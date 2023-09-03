/*
    Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem 
    crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

    Entrada:
    A entrada contem três números inteiros.

    Saída:
    Imprima a saída conforme foi especificado.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var informacoesDaLinha1 = lines.shift().split(' ');

const valores = [];

for (let i = 0; i < 3; i++) {
    let valor = informacoesDaLinha1.shift();
    valores.push(valor);
}

const valoresOrdenados = [...valores];

valoresOrdenados.sort((a, b) => a - b);

valoresOrdenados.forEach(valor => console.log(valor));

console.log();

valores.forEach(valor => console.log(valor));