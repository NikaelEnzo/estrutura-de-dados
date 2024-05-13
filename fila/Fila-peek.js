let fila = [1, 2, 3]

Array.prototype.peek = function() {
    return this[0]; // this = array
};

console.log(fila.peek()); //saida: 1
console.log(fila); // saida: 1 2 3