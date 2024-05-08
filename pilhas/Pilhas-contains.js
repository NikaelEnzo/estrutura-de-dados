    // metodo contains 

Array.prototype.contains = function(element) {
    return this.indexOf(element) !== -1; // -1 é a posição, quando ele for direrente de -1 é true, todo valor encontrado é 0 ou maior, se não encontrado retorna -1
};

let pilha = [10, 20, 30];
console.log(pilha.contains(20)); // saida: true
console.log(pilha.contains(40)); // saida: false