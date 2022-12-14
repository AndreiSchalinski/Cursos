<template>
  <div class="contador">
    <p>
      Valor Contador: <span>{{ contador }}</span>
    </p>
    <button @click="adicionar()">+</button>
    <button @click="subtrair()">-</button>
  </div>
</template>

<script>
export default {
  name:`Contador`,
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
.contador {
  font-family: Arial, Helvetica, sans-serif;
}

button {
  margin-left: 10px;
  background-color: tomato;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  outline: none;
}
</style>