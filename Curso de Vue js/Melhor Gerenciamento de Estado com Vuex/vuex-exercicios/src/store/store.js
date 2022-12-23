import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        produtos: [],
        quantidade:2,
        preco:19.99
    },

    //getters sempre estarão dentro das propriedades computadas
    getters:{
        valorTotal(state){
           return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },

    //os setters sempre estarão dentro dos methods e usarão mutation, 'para mutar' uma variável em determinado componente
    mutations:{
        //payload é um outro dado enviado do componente, nesse caso o produto
        adicionarProdutos(state, payload){
            state.produtos.push(payload)
        },
        setQuantidade(state, payload){
            state.quantidade = payload
        },
        setPreco(state, payload){
            state.preco = payload //lembrando que payload é uma variável passada para setar o preço
        }
    },

    //para dispara uma ação no método, pode usar action
    actions:{
        adicionarProdutos(context, payload){
            setTimeout(() => {
                context.commit('adicionarProdutos', payload)
            }, 1000)
        }
    }

})