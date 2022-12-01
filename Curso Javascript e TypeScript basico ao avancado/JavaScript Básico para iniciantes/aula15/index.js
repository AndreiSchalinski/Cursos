//Mais operações com Strings

//Strings são indexadas
let texto = 'Bom dia';
console.log(`${texto[2]}`);

let retorno = texto.charAt(4);
console.log(`${retorno}`);

//concatenações
let nome = 'Andrei';
let sobrenome = ' Schalinski';
let nomeCompleto = nome.concat(sobrenome);
console.log(`${nomeCompleto}`);
console.log(`${nome+sobrenome}`);

//índice em que inicia uma determinada palavra pode ser encontrado usando a função indexOf
let frase = 'Andei de bike hoje.';
let objeto = frase.indexOf('bike');
console.log(`${objeto}`);
objeto = frase.indexOf('bike', 2);
console.log(`${objeto}`);

//Como a indexOf também tem a lastIndexOf para encontrar de trás para frente.
objeto = frase.lastIndexOf('bike',19);
console.log(`${objeto}`);

//Match é uma função para encontrar caractéres através de regex
let segundoTexto = 'Moro na rua Alagoas, n 193.';
let resultado = segundoTexto.match(/[0-9]+/)
console.log(`${resultado}`);

//Replace é uma função para substituir um caractere ou frase por outra.
resultado = segundoTexto.replace('Alagoas', 'Caxias');
console.log(`${resultado}`);

//length é uma função para ver tamanho de string
console.log(`${resultado.length}`);

//slice é função para coletar fragmento de string, do início ao fim
console.log(`${segundoTexto.slice(-4, -7)}`);

//split é uma função para dividir uma string
console.log(`${segundoTexto.split(' '), 2}`);

//função para deixar caractéres tudo maiúsculo
console.log(`${segundoTexto.toUpperCase()}`);

//função para deixar caractéres todos minúsculos
console.log(`${segundoTexto.toLowerCase()}`);