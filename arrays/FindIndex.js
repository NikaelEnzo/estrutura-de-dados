let array = [1, 2, 3, 4, 5];
let index = array.findIndex(function(element) {
    return element > 3;
});
console.log(index);
// retorna 3  |  3 é a posição do primeiro elemento maior que 3, sendo ele 4, na 3 posição