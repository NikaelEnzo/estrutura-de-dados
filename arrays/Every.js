let array = [2, 4, 6, 8, 10];
let allEven = array.every(function(element) {
    return element % 2 === 0;
});
console.log(allEven);
// every retorna true (se todos os fatores forem conpativeis) ou false