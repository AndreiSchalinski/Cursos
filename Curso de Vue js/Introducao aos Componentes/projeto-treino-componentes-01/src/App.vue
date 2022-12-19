<template>
  <v-app id="inspire">
    <v-navigation-drawer color="#112651" v-model="drawer" app>
      <app-menu></app-menu>
    </v-navigation-drawer>

    <v-app-bar class="white--text" style="border-bottom: 1px solid #128ef0;" color="#112651" app>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>

      <v-toolbar-title>Pichau Informática</v-toolbar-title>
    </v-app-bar>

    <v-main class="main d-flex justify-center align-center overflow-auto">
      <h1 class="titulo-component">Dashboard</h1>
      <app-main class="container-grafics"></app-main>
    </v-main>

    <app-footer></app-footer>
  </v-app>
</template>
  
<script>
import Menu from "./components/Menu.vue";
import Main from "./components/Main.vue"
import Footer from "./components/Footer.vue";

export default {
  components: { "app-menu": Menu, "app-main": Main, "app-footer": Footer },
  data: () => ({ drawer: false }),
};
</script>

<style>

body, html{
  height: 100%;
  margin: 0;
  padding: 0;
}

.titulo-component{
  text-align: center;
  color: white;
  margin-top: 20px;
}

.main{
  background-image: url("https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg");
  background-size: 100% 100%;
}


</style>
