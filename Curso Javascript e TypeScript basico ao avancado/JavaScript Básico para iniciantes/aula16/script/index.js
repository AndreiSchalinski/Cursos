const nome = window.prompt('Informe seu nome');
const quantidadeLetras = window.prompt('Informe quantas letras tem seu nome');
const numeroTelefone = window.prompt('Informe número de telefone');
const endereco = window.prompt('Informe seu endereço');
const bairro = window.prompt('Informe seu bairro');
const cidade = window.prompt('Informe sua cidade');
const uf = window.prompt('Informe seu UF');
const nacionalidade = window.prompt('Informe sua nacionalidade');

const texto = `<h1>Informações de ${nome}</h1>`
.concat(`Me chamo <strong>${nome}</strong>.</br>`)
.concat(`Meu nome tem <strong>${quantidadeLetras}</strong>.</br>`)
.concat(`Número do meu telefone é <strong>${numeroTelefone}</strong>.</br>`)
.concat(`Meu endereço é <strong>${endereco}</strong>.</br>`)
.concat(`Meu bairro é <strong>${bairro}</strong>.</br>`)
.concat(`Minha cidade é <strong>${cidade}</strong>.</br>`)
.concat(`Meu estado é <strong>${uf}</strong>.</br>`)
.concat(`Minha nacionalidade é <strong>${nacionalidade}</strong>.</br></br>`)

const textoInformacoes = `<h1>Dados sobre o nome ${nome}</h1>`
.concat(`Meu nome tem <strong>${nome.length}</strong> letras.</br>`)
.concat(`A segunda letra é <strong>${nome[1]}</strong>.</br>`)
.concat(`Qual é primeiro índice da letra (n) <strong>${nome.indexOf('n')}</strong>.</br>`)
.concat(`O último índice da letra (n) é <strong>${nome.lastIndexOf('n')}</strong>.</br>`)
.concat(`As últimas três letras são <strong>${nome.slice(-3, nome.length)}</strong>.</br>`)
.concat(`As palavras do seu nome são <strong>${nome.split(' ')}</strong>.</br>`)
.concat(`O seu nome com letras maiúsculas ficam <strong>${nome.toUpperCase()}</strong>.</br>`)
.concat(`Seu nome com letras todas minúsculas fica <strong>${nome.toLowerCase()}</strong>.</br>`)

document.body.innerHTML = texto.concat(textoInformacoes);