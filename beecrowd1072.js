/*
    Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos 
    em seguida. Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão 
    fora do intervalo, mostrando essas informações.

    Entrada:
    A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de 
    casos de teste. Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).
    

    Saída:
    Para cada caso, imprima quantos números estão dentro (in) e quantos valores estão fora 
    (out) do intervalo.
*/

const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const valores = parseInt(lines.shift());

let dentroDoIntervalor = 0;
let foraDoIntervalo = 0;

for (let i = 0; i < valores; i++) {
    let valor = parseInt(lines.shift());

    if (valor >= 10 && valor <= 20) {
        dentroDoIntervalor++;
    } else {
        foraDoIntervalo++;
    }
}

console.log(dentroDoIntervalor + ' in');
console.log(foraDoIntervalo + ' out');