let fila = [1, 2, 3]

Array.prototype.toArray = function() {
    return this.slice(); // length = contar | = significa receber
} ;
let arrayFila = fila.toArray()
console.log(arrayFila); //saida: [ 1, 2, 3 ]