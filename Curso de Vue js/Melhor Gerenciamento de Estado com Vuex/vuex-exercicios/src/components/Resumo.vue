<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>

import {mapGetters} from 'vuex'

export default {

    computed:mapGetters({
        total:'valorTotal'
    })
    //computed:mapGetters(['valorTotal'])

    /*
    computed: {
        total() {
            return this.$store.getters.valorTotal
        }
        
        produtos(){
            return this.$store.state.produtos
        }
        
    },
    */
    /*
    data() {
        return {
            produtos: [
                { nome: 'Produto 1', quantidade: 7, preco: 14.55 },
                { nome: 'Produto 2', quantidade: 10, preco: 22.99 },
                { nome: 'Produto 3', quantidade: 1, preco: 43.18 },
            ]
        }
    }
    */
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
