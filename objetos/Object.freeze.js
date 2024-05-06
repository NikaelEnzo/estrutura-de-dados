const person = {
    name: "Ryan",
    age: 11,
    city: "Cuiabá"
};
Object.freeze(person);
person.age = 31; // não sera apliado porque objeto esta congelado (freeze)
console.log(person); // daida { name: 'Ryan', age: 11, city: 'Cuiabá' }