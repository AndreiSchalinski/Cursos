//Funções

//Função simples sem retorno
function saudacao(nome) {
    console.log(`Bom dia ${nome}.`);
}

let nome = 'Luiz';

saudacao(nome);
nome = 'Maria';
saudacao(nome);

//Função com retorno

function aviso(nome) {
    return `Continuar executando ${nome}.`;
}

const retorno = aviso(nome);

console.log(retorno);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

resultado = soma(3,2);

console.log(`A soma resultou em ${resultado}.`);

const raiz = function (n) {
    return n** 0.5;
};

resultado = raiz(4);

console.log(`Raiz de 4 é ${resultado}`);

const usuario = 'José';

const mensagem = (usuario) => `${usuario}, a raiz calculada acima deu ${retorno}.`;

console.log(`Retorno: ${mensagem(usuario)}`);

const resultadoMultipliacao = (n,z) => ((4 * n) + z);

resultado = resultadoMultipliacao(4,10);

console.log(`A multiplicação resultou em ${resultado}.`);