const listaArgumentos = process.argv.slice(2);

console.log ('---------------- Executando um FOR ------------------');
for(let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`Posição ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`);
}

console.log ('----------------- Exevutando um WHILE ----------------');
let controladorWhile = 0;
while (controladorWhile < listaArgumentos.length){
    console.log(`Posição ${controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log ('------------------ Exevutando um DO WHILE ----------------');
let controladorDoWhile = 0;
do {
    console.log(`Posição ${controladorDoWhile} valor lido = ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
}while (controladorDoWhile < listaArgumentos.length)

console.log('------------------- Executando um FOR OF ------------------');
for(const argumento of listaArgumentos){
    console.log(`Valor lido = ${argumento}`);
}