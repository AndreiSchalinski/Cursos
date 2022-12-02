//Objetos

//Formas de criar objetos

const usuario = {
    id: 1,
    nome: 'Carlos',
    idade: 20,
    peso: 76,
    altura: 1.74,
    faleAlgo:function (mensagem) {
        return mensagem;
    },
    faleNovamente:function () {
        console.log(`Eu ${this.nome} estou muito feliz.`)
    }
}

function criaUsuario(id, nome, idade, peso, altura) {
    return {
        id: id,
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura
    }
}

const usuarioNovo = criaUsuario(2, 'Karla', 34, 89, 1.76);

console.log(`Id:${usuario.id} - Nome:${usuario.nome} - Idade:${usuario.idade} - Peso:${usuario.peso} - Altura:${usuario.altura}.`);
console.log(`Id:${usuarioNovo.id} - Nome:${usuarioNovo.nome} - Idade:${usuarioNovo.idade} - Peso:${usuarioNovo.peso} - Altura:${usuarioNovo.altura}.`);
console.log(`Eu Carlos, digo isso: ${usuario.faleAlgo('Olá pessoal, me chamo Carlo.')}`);

//console.log(usuario.faleNovamente());


