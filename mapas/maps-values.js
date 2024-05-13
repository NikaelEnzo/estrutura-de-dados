let mapa = new Map();

mapa.set('chave1', 'valor1');
mapa.set('chave2', 'valor2');

let interador = mapa.values();
for (let chave of interador) {
    console.log(chave);
}
/* saida
valor1
valor2
*/