<template>
  
  <div>
    <div>
      <button @click="darbomdia()">Cumrpimento do pai</button>
    </div>
  <Main :frase="frase" @cumprimentou="frase = $event, darbomdia()">  
    
    <!--@cumprimentou="darbomdia()" para disparar uma função presente no pai que solicitada pelo filho-->
    <!--@cumprimentou="frase = $event, darbomdia()" filho invocando função que está no pai e enviando informação também para alterar no pai-->
    
  </Main>

  </div>
</template>

<script>
import Main from "./components/Main.vue";
export default {
  components: { Main },
  data(){
    return {
      frase:'O pai diz bom dia'
    }
  },
  methods:{
    darbomdia(){
      alert(this.frase)
    }
  }
};
</script>

<style>
</style>