let fila = [1, 2, 3]

Array.prototype.size = function() {
    return this.length; // length = contar
};

console.log(fila.size()); //saida: 3
