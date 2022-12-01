//Exercício

const nome = 'Luiz';
const sobrenome = 'Otávio Mirando';
const idade = 30;
const peso = 84;
const altura = 1.84;
let imc = (peso/(altura*altura));
let anoNascimento;

let texto = nome+' '+sobrenome+' tem '+idade+' anos, pesa '+peso+' kg, tem '+altura+' de altura e seu imc é '+imc;

console.log(`Texto sem template string: ${texto}`);

//Template strings

let textTemplateString = `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu imc é ${imc}.`;

console.log(`Template String: ${textTemplateString}`);