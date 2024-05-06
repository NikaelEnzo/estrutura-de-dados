const peroson = {
    name: "Nikael",
    age: 16,
    city: "Porto Velho"
};
Object.seal(peroson);
peroson.age = 31; // Isso terá efeito porque as propriedades do objeto está selado, mas não o valor da propriedade.
peroson.gender = "masculino"; // Isso não terá efeito porque não podemos adicionar outras propriedades pois ela esta selada. 
console.log(peroson); // saida { name: 'Nikael', age: 31, city: 'Porto Velho' }