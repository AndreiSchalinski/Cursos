<template>
  <div>
    <div class="quadro-usuarios-adicionados">
      <ul>
        <li v-if="!usuario">Nenhum usuário adicionado</li>
        <li v-else>Id: {{ usuario.id }} - Nome: {{ usuario.nome }} - Idade: {{ usuario.idade }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

import barramento from '../barramento'

export default {
  name: "app-quadro-usuarios",
  data() {
    return {
      usuario: null,
    }
  },

  created(){
    barramento.onUsuarioSelecionado(usuarioSelecionado => {
      this.usuario = usuarioSelecionado
    })
  }
};
</script>

<style>
.quadro-usuarios-adicionados {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  width: 700px;
  height: 500px;
}

ul {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  list-style: none;
}
</style>