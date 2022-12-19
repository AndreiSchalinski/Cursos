<template>
  <div id="app">
    <h1 class="titulo-agenda">Agenda de Atendimentos</h1>

    <div class="container-paineis">
      <app-lista-cliente :lista="lista"></app-lista-cliente>
      <app-agenda-paciente></app-agenda-paciente>
    </div>
  </div>
</template>

<script>
import ListaCliente from "./components/ListaClientes.vue";
import AgendaPaciente from './components/AgendaPaciente.vue'

export default {
  components: { "app-lista-cliente": ListaCliente, 'app-agenda-paciente': AgendaPaciente},
  data() {
    return {
      lista: [
        {
          id: 1,
          nome: "Andrei Schalinski",
          idade: 30,
          dataAgendamendo: new Date().toLocaleString(),
        },
        {
          id: 2,
          nome: "Emanuelly",
          idade: 30,
          dataAgendamendo: new Date().toLocaleString(),
        },
        {
          id: 3,
          nome: "Pedro",
          idade: 15,
          dataAgendamendo: new Date().toLocaleString(),
        },
      ],
    };
  },
};
</script>

<style>
.titulo-agenda {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 30px;
}

.container-paineis {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>