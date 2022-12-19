<template>
  <div id="app">
    <h1 style="text-align: center; margin: 50px 0 50px 0">Lista de Usuário</h1>

    <div class="container-lista-tabela">
      <!--ligação direta, ond o filho vai receber dados enviados do pai. ou seja, de App para ListaUsuarios-->
      <app-lista-usuarios :lista="lista"></app-lista-usuarios>
      <app-quadro-usuarios></app-quadro-usuarios>
    </div>
  </div>
</template>

<script>
import ListaUsuario from "./components/ListaUsuarios.vue";
import QuadroUsuarios from "./components/PainelAdicionados.vue";

export default {
  name: "app",
  components: {
    "app-lista-usuarios": ListaUsuario,
    "app-quadro-usuarios": QuadroUsuarios,
  },
  data() {
    return {
      lista: [
        {
          id: 1,
          nome: "Andrei Schalinski",
          idade: 30,
        },
        {
          id: 2,
          nome: "Emanuelly",
          idade: 26,
        },
        {
          id: 3,
          nome: "Pedro",
          idade: 15,
        },
        {
          id: 4,
          nome: "Dani",
          idade: 45,
        },
        {
          id: 5,
          nome: "Alan",
          idade: 38,
        },
        {
          id: 6,
          nome: "Karla",
          idade: 54,
        },
      ],
    };
  },
};
</script>

<style>
.container-lista-tabela {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid red;
  width: 100%;
}
</style>