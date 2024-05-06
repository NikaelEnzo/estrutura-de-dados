let array = [1, 2, 3, 4, 5];
array.splice(2, 0, "a", "b") // Insedre "a" e "b" a partir do indice 2
console.log(array)

array.splice(3, 2);
console.log(array)
// array.splice(1, 2, 3)
//       divide, apaga, adiciona