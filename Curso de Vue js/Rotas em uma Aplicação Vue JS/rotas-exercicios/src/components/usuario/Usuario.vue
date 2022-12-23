<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr>
    <!--router-view ser para renderizar o conteudo direcionado pelo router, no arquivo de rotas-->
    <router-view></router-view>
    <button sucesso @click="irParaInicio()">Voltar</button>
  </div>
</template>

<script>
export default {
/*
  props:['id'],//propriedade recebido do arquivo router, configuração feita para este componente

  data(){
    return {
      //é possível pegar o vaor que foi cetado na url com router, da forma abaixo
      id: this.$route.params.id
    }
  },

  //monitorando o id ele dispara este evendo setando o id na url com o novo valor
  watch:{
    //serve para monitorar sempre que houver uma mudança na rota ao clicar no link
    $route(to, from){
      this.id = to.params.id
    }
  }
  */

  methods:{
    irParaInicio(){
      //this.$router.push('/')passando o caminho de forma simples
      //this.$router.push({path:'/'}) //passando o caminho como objeto, router também aceita
      this.$router.push({name:'inicio'})
    }
  },

  

}
</script>

<style>

</style>