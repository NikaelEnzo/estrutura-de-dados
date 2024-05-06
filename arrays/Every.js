let array = [2, 4, 6, 8, 10];
let allEven = array.every(function(element) {
    return element % 2 === 0;
});
console.log(allEven); // Saida 2, 4
// every retorna true ou false