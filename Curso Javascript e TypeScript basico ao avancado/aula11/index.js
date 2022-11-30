//Operadores Aritméticos.

//Adição e Concatenação -> +

let primeiraParcela = 10;
let segundaParcela = 5;

let resultado = primeiraParcela + segundaParcela;
console.log(`Soma: ${resultado}`);

//Subtração -> -
resultado = primeiraParcela - segundaParcela;
console.log(`Subtração: ${resultado}`);

//Potenciação -> **
resultado = primeiraParcela **segundaParcela;
console.log(`Potenciação: ${resultado}`);

//Quociente ou resto -> %
resultado = primeiraParcela % segundaParcela;
console.log(`Quociente: ${resultado}`);

//Operador de incremento -> ++
let contador = 1;

contador++;
console.log(`Pós Incremento: ${contador}`);
//antes, ele primeiro faz o incremento.
++contador;
console.log(`Pré Incremento: ${contador}`);

//Operador de Decremento -> --
contador = 1;
contador--;
console.log(`Pós Decremento: ${contador}`);
--contador;
console.log(`Pós Decremento: ${contador}`);

//Converter Strings para números
const terceiraParcela = '4.3'
//inteiro int
resultado = parseInt(terceiraParcela);
console.log(`Para inteiro: ${resultado}`)
//decimal float
resultado = parseFloat(terceiraParcela);
console.log(`Para inteiro: ${resultado}`)
// Number
resultado = Number(terceiraParcela);
console.log(`Para Number: ${resultado}`)


