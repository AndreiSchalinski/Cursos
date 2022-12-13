<template>
  <div>
    <p id="teste">{{titulo}}</p>
    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
export default {

  data:function(){
    return {
      titulo:`Testando título: `
    }
  }

}
</script>

<style>

  #teste{
    background-color: orange;
  }

</style>