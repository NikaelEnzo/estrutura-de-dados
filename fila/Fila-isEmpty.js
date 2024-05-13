let fila = []

Array.prototype.isEmpty = function() {
    return this.length === 0; // length = contar
};
Array.prototype.enqueue = function(item) {
    return this.push(item);
};
console.log(fila.isEmpty()); //saida: true
fila.enqueue(1) //adicionando elemento
console.log(fila.isEmpty()); // saida: 1