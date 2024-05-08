    // metodo size 

Array.prototype.size = function() {
    return this.length;
};

let pilha = [10, 20, 30];
console.log(pilha.size()); // saida da contagem de itens: 3