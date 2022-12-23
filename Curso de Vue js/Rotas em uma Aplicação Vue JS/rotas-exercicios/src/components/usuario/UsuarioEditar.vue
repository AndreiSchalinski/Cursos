<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <p> <strong>Código url:</strong> {{ id }}</p>
    <p> <strong>Completo:</strong> {{ $route.query.completo? 'Sim':'Não' }} </p><!--serve para pegar valores que vieram a partir da query-->
    <p> <strong>Completo:</strong> {{ $route.query.lingua? 'Sim':'Não' }} </p>
    <hr>
       
    <button primario>Confirmar</button>
  </div>
</template>

<script>
export default {
  props:['id']
}
</script>

<style>

</style>