new Vue({
    el: `#desafio`,
    data: {
        nome: `Andrei`,
        idade: 30,
        linkImg:`http://files.cod3r.com.br/curso-vue/vue.jpg`
    },
    methods:{
        multiplicaIdade:function () {
            return this.idade * 3
        },
        exibaNumRandomico: function () {
            return Math.random(0,1)
        }
    }
})