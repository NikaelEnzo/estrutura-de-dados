
let conjunto = new Set([1, 2, 3]);
let iterador = conjunto.values();
console.log (iterador.next().value); // saida 1
console.log (iterador.next().value); // saida 2
console.log (iterador.next().value); // saida 3