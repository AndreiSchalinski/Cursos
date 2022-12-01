const primeiraParcela = window.prompt('Informe primeiro valor');
const operacao = window.prompt('Informe operação ex: -, +, *, /');
const segundaParcela = window.prompt('Informe segundo valor');
const resultado = eval(primeiraParcela+operacao+segundaParcela);

window.alert(`O resultado foi ${resultado}`);