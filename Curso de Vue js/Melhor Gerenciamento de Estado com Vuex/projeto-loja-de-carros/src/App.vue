<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" color="#0b6c78" app>
      <MenuBar></MenuBar>
    </v-navigation-drawer>

    <v-app-bar color="#0b6c78" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>V8 - Veículos Esports</v-toolbar-title>
    </v-app-bar>

    <v-main class="d-flex align-center">
      <router-view />
    </v-main>

    <MainFooter></MainFooter>
  </v-app>
</template>
  
  <script>
import MenuBar from "./components/MenuNav.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  components: { MenuBar, MainFooter },

  data() {
    return {
      drawer: null,
    };
  },
};
</script>
  
  <style>
</style>