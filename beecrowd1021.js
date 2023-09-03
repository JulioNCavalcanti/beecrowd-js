/*
    Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. 
    A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. 
    As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 
    e 0.01. A seguir mostre a relação de notas necessárias.

    Entrada:
    O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

    Saída:
    Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo 
    fornecido.

    Obs: Utilize ponto (.) para separar a parte decimal.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = parseFloat(lines.shift());

console.log("NOTAS:");

console.log(parseInt(valor / 100.0) + " nota(s) de R$ 100.00");
valor %= 100.0;

console.log(parseInt(valor / 50.0) + " nota(s) de R$ 50.00");
valor %= 50.0;

console.log(parseInt(valor / 20.0) + " nota(s) de R$ 20.00");
valor %= 20.0;

console.log(parseInt(valor / 10.0) + " nota(s) de R$ 10.00");
valor %= 10.0;

console.log(parseInt(valor / 5.0) + " nota(s) de R$ 5.00");
valor %= 5.0;

console.log(parseInt(valor / 2.0) + " nota(s) de R$ 2.00");
valor %= 2.0;

console.log("MOEDAS:");

console.log(parseInt(valor / 1.0) + " moeda(s) de R$ 1.00");
valor %= 1.0;

console.log(parseInt(valor / 0.50) + " moeda(s) de R$ 0.50");
valor %= 0.50;

console.log(parseInt(valor / 0.25) + " moeda(s) de R$ 0.25");
valor %= 0.25;

console.log(parseInt(valor / 0.10) + " moeda(s) de R$ 0.10");
valor %= 0.10;

console.log(parseInt(valor / 0.05) + " moeda(s) de R$ 0.05");
valor %= 0.05;

console.log(parseInt((valor / 0.01).toFixed()) + " moeda(s) de R$ 0.01");