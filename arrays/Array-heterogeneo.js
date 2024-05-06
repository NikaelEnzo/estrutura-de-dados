let myArray = [1, "dois", {nome: "João"}, [4, 5, 6], function() { return "função dentro de um array";}];

// Acessando elementos do array
console.log(myArray[0]) //saida 1
console.log(myArray[2]) //saida {nome "joão"}

// Adicionado elementos ao array
myArray.push(7);
console.log(myArray); // saida [ 1, 'dois', { nome: 'João' }, [ 4, 5, 6 ], [Function (anonymous)], 7 ]

// Iterando sobre os elementos do array
myArray.forEach(function(element) {
    console.log(element);
});
/* saida
    1
    dois
    { nome: 'João' }
    [ 4, 5, 6 ]
    [Function (anonymous)]
    7
*/