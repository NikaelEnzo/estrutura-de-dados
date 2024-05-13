let mapa = new Map();

mapa.set('chave1', 'valor1');
mapa.set('chave2', 'valor2');

let interador = mapa.keys();
for (let chave of interador) {
    console.log(chave);
}
/* saida
chave1
chave2
*/