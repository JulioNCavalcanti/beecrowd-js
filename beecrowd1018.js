/*
    Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o 
    valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. 
    A seguir mostre o valor lido e a relação de notas necessárias.

    Entrada:
    O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

    Saída:
    Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, 
    conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, 
    caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines.shift());

console.log(valor);

console.log(parseInt(valor / 100.0) + " nota(s) de R$ 100,00");
valor %= 100.0;

console.log(parseInt(valor / 50.0) + " nota(s) de R$ 50,00");
valor %= 50.0;

console.log(parseInt(valor / 20.0) + " nota(s) de R$ 20,00");
valor %= 20.0;

console.log(parseInt(valor / 10.0) + " nota(s) de R$ 10,00");
valor %= 10.0;

console.log(parseInt(valor / 5.0) + " nota(s) de R$ 5,00");
valor %= 5.0;

console.log(parseInt(valor / 2.0) + " nota(s) de R$ 2,00");
valor %= 2.0;

console.log(valor + " nota(s) de R$ 1,00");