<template>
  <div>
    <h1>Lista de Produtos</h1>
    <div>
        <input type="text" placeholder="Informe o produto" v-model="nome"><input type="text" placeholder="Informe o preço" v-model.number="preco"> <button @click="adicionar()">CADASTRAR</button>
    </div>
    <h3>Produtos cadastrados</h3>
    <ul>
        <li v-for="(produto, i) in produtosCadastrados" :key="i">Cód: {{ i+1 }}................Nome: {{ produto.nome }}................Preço: R${{ produto.preco }} reais.</li>
    </ul>
  </div>
</template>

<script>
export default {

    data(){
        return {
            nome:'',
            preco:''
        }
    },

    computed:{
        produtosCadastrados(){
            return this.$store.state.produtos
        }
    },

    methods:{
        adicionar(){
            this.$store.state.produtos.push({nome:this.nome, preco:this.preco})
            this.produto = ''
            this.preco = ''
        }
    }

}
</script>

<style>

ul{
    list-style: none;
}

</style>