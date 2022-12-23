<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr>
    <p> <strong>Código url:</strong> {{ id }}</p>
    <!--:to="`/usuario/${$route.params.id}/editar`"-->
    <router-link tag="button" primario :to="{name: 'editarUsuario', params: {id: $route.params.id}, query:{completo:true, lingua:'pt'}}"><!--query serve para especificar parametros que podem ser inseridas em url-->
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props:['id']
}
</script>

<style>

</style>