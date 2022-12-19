<template>
  <div>
    <table class="lista-usuarios">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(usuario, i) in lista" :key="i" @click="setUsuarioSelecionado(usuario)">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.nome }}</td>
          <td>{{ usuario.idade }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import barramento from '../barramento'

export default {

  // aqui o filho recebe os dados enviados do pai, props é uma ligação direta de pai para filho
  //os dados da lista são enviados do arquivo pai para cá, pra interpolar no for e criar a lista
  props:{lista:Array},
  methods:{
    setUsuarioSelecionado(usuario){
      barramento.setUsuarioSelecionado(usuario)
    }
  }

}
</script>

<style>
.lista-usuarios {
  font-size: 30px;
}

.lista-usuarios thead tr th {
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px 50px;
  border: 1px solid white;
  background-color: burlywood;
}

.lista-usuarios tbody tr td {
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px 50px;
  border: 1px solid white;
}
</style>