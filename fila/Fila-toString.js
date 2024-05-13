let fila = [1, 2, 3]

Array.prototype.toString = function() {
    return this.join(', ');
} ;

console.log(fila.toString());