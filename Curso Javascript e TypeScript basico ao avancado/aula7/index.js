//variáveis do tipo const precisam ser inicializadas assim que criadas.
//as variáveis do tipo const também não podem ser alteradas depois de inicializadas,
//somente se uma nova variável receber o seu valor.

const nome = 'Andrei';

console.log(nome);

const primeiroNumero = 20;
const segundoNumero = 20;
const resultado = primeiroNumero + segundoNumero;
const resultadoDuplicado = primeiroNumero * resultado;

console.log('Soma:',resultado,'Duplicação:',resultadoDuplicado);

//para ver o tipo da variável pode-se usar, em que o valor foi recebido, pode-se usar o typeof

console.log(typeof primeiroNumero);
