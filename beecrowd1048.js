/*
    A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a 
    tabela abaixo:


           Salário         |    Percentual de Reajuste
     --------------------------------------------------
        0 - 400.00         |            15%         
        400.01 - 800.00    |            12%
        800.01 - 1200.00   |            10%
        1200.01 - 2000.00  |            7%
        Acima de 2000.00   |            4%



    Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste 
    ganho e o índice reajustado, em percentual.

    Entrada:
    A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

    Saída:
    Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.
*/

const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const salario = parseFloat(lines.shift());

let novoSalario = 0;
let reajusteGanho = 0;
let percentualDeReajuste = 0;

if (salario >= 0 && salario <= 400.00) {
    novoSalario = salario + (salario * 0.15);
    reajusteGanho = salario * 0.15;
    percentualDeReajuste = 15;
} else if (salario >= 400.01 && salario <= 800.00) {
    novoSalario = salario + (salario * 0.12);
    reajusteGanho = salario * 0.12;
    percentualDeReajuste = 12;
} else if (salario >= 800.01 && salario <= 1200.00) {
    novoSalario = salario + (salario * 0.10);
    reajusteGanho = salario * 0.10;
    percentualDeReajuste = 10;
} else if (salario >= 1200.01 && salario <= 2000.00) {
    novoSalario = salario + (salario * 0.07);
    reajusteGanho = salario * 0.07;
    percentualDeReajuste = 7;
} else if (salario > 2000.00) {
    novoSalario = salario + (salario * 0.04);
    reajusteGanho = salario * 0.04;
    percentualDeReajuste = 4;
}

console.log('Novo salario: ' + novoSalario.toFixed(2));
console.log('Reajuste ganho: ' + reajusteGanho.toFixed(2));
console.log('Em percentual: ' + percentualDeReajuste + ' %');