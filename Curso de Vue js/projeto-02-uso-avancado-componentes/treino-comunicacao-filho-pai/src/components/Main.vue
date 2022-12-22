<template>
  <div>
    <button @click="cumprimentar()">Cumprimento do filho</button>
  </div>
</template>

<script>
export default {

    props:{frase: String},
    methods:{
        cumprimentar(){

            this.frase = 'O filho diz bom dia'

            this.$emit('cumprimentou', this.frase)       
        }
    }

}
</script>

<style>

</style>