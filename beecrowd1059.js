/*
    Faça um programa que mostre os números pares entre 1 e 100, inclusive.

    Entrada:
    Neste problema extremamente simples de repetição não há entrada.

    Saída:
    Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.
*/

const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}