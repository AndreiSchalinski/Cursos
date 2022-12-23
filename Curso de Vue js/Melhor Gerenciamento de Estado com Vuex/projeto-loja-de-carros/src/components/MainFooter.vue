<template>
  <v-footer class="footer" color="#0b6c78" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col  class="footer-base py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Andrei</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: ["Dashboard", "Veículos", "Financeiro","Usuários"],
    };
  },
};
</script>

<style>

.footer-base{
  background-color: #0b6c78;
}
</style>