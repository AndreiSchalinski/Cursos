new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ``
    },
    methods: {
        exibirAlerta() {
            alert(`Exibindo alerta...`)
        },
        exibirDigitacao(event){
            this.valor = event.target.value;
        },
        exibirDigitacaoComEnter(event){
            this.valor2 = event.target.value;
        }
    }
})