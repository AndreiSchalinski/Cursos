<template>
  <div class="contador-soma">
    <h1>Contador Soma</h1>
    <br />
    <br />
    <p>Contador de Soma: {{ contadorSoma }}</p>
    <button class="btn" @click="adicionar()">+</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: `ContadorDeSoma`,
  data() {
    return {
      contadorSoma: 0,
    };
  },
  methods: {
    adicionar() {
      this.contadorSoma++;
    },
  },
};
</script>

<style>
</style>