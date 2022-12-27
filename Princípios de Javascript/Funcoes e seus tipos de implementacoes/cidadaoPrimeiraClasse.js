//implementada de forma literal
function funcao1() {
    //corpo da função
}

//atribuindo função para constante
const funcao2 = function () {
    //corpo da função
}

//armazenando em array
const array = [function (a, b) { return a + b }, funcao1, funcao2]
console.log(`Resultado da função é ${array[0](2,5)}.`)

//armazenando em objeto
const objeto = {}
objeto.falar = function () {return `Bom dia pessoal.`}
console.log(objeto.falar())

//passar uma função como parâmetro dentro de outra função
function run(fun) {
    fun()
}

run(function(){console.log(`Executando função dentro de outra....`)})

//uma função pode retornar/conter uma função
function soma(a,b) {
    return function (c) {
        console.log(`Somou primeiro: ${a + b + c}`)
    }
}
soma(1,2)(5)


