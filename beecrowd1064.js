/*
    Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. 
    Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um 
    dígito após o ponto decimal.

    Entrada:
    A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos 
    um destes números será positivo.

    Saída:
    O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a 
    média dos valores positivos digitados.
*/

const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let quantidadeDeValoresPositivos = 0;
let somaDosValoresPositivos = 0;

for (let i = 0; i < 6; i++) {
    let valor = Number(lines.shift());

    if (valor > 0) {
        somaDosValoresPositivos += valor;
        quantidadeDeValoresPositivos++;
    }
}

let mediaDosValoresPositivos = (somaDosValoresPositivos / quantidadeDeValoresPositivos).toFixed(1);

console.log(quantidadeDeValoresPositivos + ' valores positivos');
console.log(mediaDosValoresPositivos);