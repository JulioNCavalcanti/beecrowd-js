/*
    Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos 
    (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

    Entrada:
    Seis valores, negativos e/ou positivos.

    Saída:
    Imprima uma mensagem dizendo quantos valores positivos foram lidos.
*/

const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const valores = [];
let quantidadeDeValoresPositivos = 0;

for (let i = 0; i < 6; i++) {
    const valor = Number(lines.shift());
    valores.push(valor);
}

for (const valor of valores) {
    if (valor > 0) {
        quantidadeDeValoresPositivos++;
    }
}

console.log(quantidadeDeValoresPositivos + ' valores positivos');