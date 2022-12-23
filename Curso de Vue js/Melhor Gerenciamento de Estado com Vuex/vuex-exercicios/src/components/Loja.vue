<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>

import { mapActions, mapMutations } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1,
            
        }
    },
    computed:{
        quantidade(){
            return this.$store.state.quantidade
        },

        preco(){
            return this.$store.state.preco
        }
    },
    methods: {

        //...mapMutations(['adicionarProdutos']),

        ...mapActions(['adicionarProdutos']),

        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            //para alterar diretamente o valor da viriável em store
            //this.$store.state.produtos.push(produto)

            //para alterar apenas a uma variável do contexto
            //this.$store.commit('adicionarProdutos', produto)

            //dessa forma, os produtos são adicionados através de mapMutations
            this.adicionarProdutos(produto)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
