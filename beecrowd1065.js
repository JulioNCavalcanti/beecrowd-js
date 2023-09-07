/*
    Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e 
    mostre esta informação.

    Entrada:
    O arquivo de entrada contém 5 valores inteiros quaisquer.

    Saída:
    Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
*/

const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let quantidadeDeValoresPares = 0;

for (let i = 0; i < 5; i++) {
    let valor = parseInt(lines.shift());

    if (valor % 2 === 0) {
        quantidadeDeValoresPares++;
    }
}

console.log(quantidadeDeValoresPares + ' valores pares');