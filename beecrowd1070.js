/*;
    Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a 
    partir de X, um valor por linha, inclusive o X ser for o caso.

    Entrada:
    A entrada será um valor inteiro positivo.

    Saída:
    A saída será uma sequência de seis números ímpares.
*/

const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const valoresImpares = [];
const x = parseInt(lines.shift());

for (let i = x; valoresImpares.length < 6; i++) {
    if (i % 2 !== 0) {
        valoresImpares.push(i);
    }
}

for (const impares of valoresImpares) {
    console.log(impares);
}