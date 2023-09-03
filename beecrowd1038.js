/*
    Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. 
    A seguir, calcule e mostre o valor da conta a pagar.

    Código |   Especificação   | Preço
    ------------------------------------
    1      |  Cachorro Quente  | R$ 4.00
    2      |  X-Salada         | R$ 4.50
    3      |  X-Bacon          | R$ 5.00
    4      |  Torrada simples  | R$ 2.00
    5      |  Refrigerante     | R$ 1.50

    Entrada
    O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de 
    um item conforme tabela acima.

    Saída
    O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas 
    após o ponto decimal.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var informacaoDaLinha1 = lines.shift().split(" ");

let codigo = parseInt(informacaoDaLinha1.shift());
let quantidade = parseInt(informacaoDaLinha1.shift());

const retornaValorTotal = (codigo, quantidade) => {
    switch (codigo) {
        case 1:
            return 4.00 * quantidade;
        case 2:
            return 4.50 * quantidade;
        case 3:
            return  5.00 * quantidade;
        case 4:
            return 2.00 * quantidade;
        case 5:
            return 1.50 * quantidade;
    }
}

console.log('Total: R$ ' + retornaValorTotal(codigo, quantidade).toFixed(2));