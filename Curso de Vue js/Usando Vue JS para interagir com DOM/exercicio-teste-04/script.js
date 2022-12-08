new Vue({

    el:`#app`,
    data:{
        quantidade:0,
        mensagemreiniciar:``
    },
    computed:{
        mensagem(){
            if (this.quantidade < 0) {
                return `Quantidade ${this.quantidade} é inválida, somente IGUAL OU MAIOR que zero.`
            } else if (this.quantidade == 0) {
                return `Adicionar algo no carrinho!`
            } else if (this.quantidade > 0) {
                return `Continue adicionando produtos e finalize sua compra conosco agora.`
            }
        }
    },
    watch:{
        quantidade(quantidadeNova,quantidadeAnterior){
            if (quantidadeNova > 10) {
                this.mensagemreiniciar = `Quantidade inválida, sistema irá zerar quantidade.`
                setTimeout(() => {
                    this.quantidade = 0;
                },5000)
            }
        }
    }

})