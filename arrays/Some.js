let array = [1, 2, 3, 4, 5];
let hasEven = array.some(function(element) {
    return element % 2 === 0;
});
console.log(hasEven);
// some retorna true (mesmo se tiver so 1 fator conpativel) ou false