//Tipos primitivos e por referência

//Neste caso o valor da variável não altera pois ela é um tipo primitivo

let a = 'a';
let b = a;
console.log(b);
b = 'c';
console.log(a);


//Neste caso o valor altera, pois é por referência, assim se alterar o banco, a lista também altera, pois as duas apontam para uma referência na memória, o que não acontece em tipo primitivo pois seu endereço é ele mesmo.
let lista = [1,2,3];

let banco = lista;

console.log(lista,banco);

banco.push(4);

console.log(lista)
