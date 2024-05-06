const target = { a: 1, b: 2,};
const source = { b: 4, c: 5};

const merged = Object.assign({}, target, source);
console.log(merged) // retorna { a: 1, b: 4, c: 5 }
//soma dos objetos