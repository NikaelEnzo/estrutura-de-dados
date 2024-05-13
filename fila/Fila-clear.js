let fila = [1, 2, 3]

Array.prototype.clear = function() {
    this.length = 0; // length = contar | = significa receber
} ;
fila.clear()
console.log(fila); //saida: []
