// funciona no principio FIFO (first in First out) primeiro a entrar, primeiro a sair
//metodo enqueue
Array.prototype.enqueue = function(item) {
    return this.push(item);
};

let fila = []

fila.enqueue(1);
fila.enqueue(2);
console.log(fila);