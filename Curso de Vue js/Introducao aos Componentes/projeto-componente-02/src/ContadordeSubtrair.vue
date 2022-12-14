<template>
  <div class="contador-de-subtracao">
    <h1>Contador de Subtração</h1>
    <p>Contador do arquivo Subtração: {{contadorSubtracao}}</p>
    <button @click="subtrair()">-</button>
  </div>
</template>

<script>
export default {

    name:`ContadordeSubtrair`,
    data(){
        return {
            contadorSubtracao: 0
        }
    },
    methods:{
        subtrair(){
            this.contadorSubtracao--
        }
    }

}
</script>

<style>

</style>