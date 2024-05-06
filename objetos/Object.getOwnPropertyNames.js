const person = {
    name: "Nikael",
    age: 16,
    city: "Porto Velho"
};
const propertyName = Object.getOwnPropertyNames(person);
console.log(propertyName); // saida [ 'name', 'age', 'city' ]