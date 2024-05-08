    // metodo isEmpty 

Array.prototype.isEmpty = function() {
    return this == 0;
};

let pilha = [];
console.log(pilha.isEmpty()); // saida: true
pilha.push(10);
console.log(pilha.isEmpty()); // saida: false