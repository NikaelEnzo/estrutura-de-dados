let array = [1, 2, 3, 4, 5];
let sum = array.reduce(function(accumulator, currentValor) {
    return accumulator + currentValor;
}, 0);
console.log(sum);
// o valor atual vira o valor acumulado e depois soma com o valor atual ate completar o siclo, resultando uma suma de todos os valores