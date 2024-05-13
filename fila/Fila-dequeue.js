// funciona no principio FIFO (first in First out) primeiro a entrar, primeiro a sair
//metodo enqueue
Array.prototype.dequeue = function() {
    return this.shift(); //shitf
};

let fila = [1, 2, 3]

console.log(fila.dequeue()); //saida: 1
console.log(fila); // saida: 2 3