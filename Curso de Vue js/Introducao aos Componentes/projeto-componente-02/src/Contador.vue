<template>
  <div class="contador-novo">
    <h1>Contadores</h1>
    <br />
    <br />
    <p>Contado feito no arquivo App</p>
    <p>Contador: {{ contador }}</p>
    <button @click="adicionar()">+</button>
    <button @click="subtrair()">-</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: `Contador`,
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    adicionar() {
      this.contador++;
    },
    subtrair() {
      this.contador--;
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
}

button {
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background-color: salmon;
  outline: none;
  border-radius: 15px;
}
</style>