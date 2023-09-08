/*
    Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores 
    digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados 
    foram negativos.

    Entrada:
    O arquivo de entrada contém 5 valores inteiros quaisquer.

    Saída:
    Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final 
    de linha após cada uma.
*/

const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let quantidadeDeValoresPares = 0;
let quantidadeDeValoresImpares = 0;
let quantidadeDeValoresPositivos = 0;
let quantidadeDeValoresNegativos = 0;

for (let i = 0; i < 5; i++) {
    let valor = parseInt(lines.shift());

    if (valor % 2 === 0) {
        quantidadeDeValoresPares++;
    } else {
        quantidadeDeValoresImpares++;
    }

    if (valor > 0) {
        quantidadeDeValoresPositivos++;
    } else if (valor != 0) {
        quantidadeDeValoresNegativos++;
    }
}

console.log(quantidadeDeValoresPares + ' valor(es) par(es)');
console.log(quantidadeDeValoresImpares + ' valor(es) impar(es)');
console.log(quantidadeDeValoresPositivos + ' valor(es) positivo(s)');
console.log(quantidadeDeValoresNegativos + ' valor(es) negativo(s)');