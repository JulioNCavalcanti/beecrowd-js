/*
    Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 
    1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre 
    o valor a ser pago.

    Entrada:
    O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois 
    inteiros e um valor com 2 casas decimais.

    Saída:
    A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço 
    após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let informacoesDaPeca1 = lines.shift().split(" ");
let informacoesDaPeca2 = lines.shift().split(" ")

let codigoDaPeca1 = parseInt(informacoesDaPeca1.shift());
let numeroDePecas1 = parseInt(informacoesDaPeca1.shift());
let valorUtilitarioDeCadaPeca1 = parseFloat(informacoesDaPeca1.shift());

let codigoDaPeca2 = parseInt(informacoesDaPeca2.shift());
let numeroDePecas2 = parseInt(informacoesDaPeca2.shift());
let valorUtilitarioDeCadaPeca2 = parseFloat(informacoesDaPeca2.shift());

let valorAPagar = (numeroDePecas1 * valorUtilitarioDeCadaPeca1) + (numeroDePecas2 * valorUtilitarioDeCadaPeca2);

console.log("VALOR A PAGAR: R$ " + valorAPagar.toFixed(2));