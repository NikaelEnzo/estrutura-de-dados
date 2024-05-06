const person = {
    name: "Jeane",
    age: 41,
    city: "Cuiabá"
};
console.log(person.hasOwnProperty('name')); // saida true
console.log(person.hasOwnProperty('toString'));
// saida falsa, não tem propriedade toString