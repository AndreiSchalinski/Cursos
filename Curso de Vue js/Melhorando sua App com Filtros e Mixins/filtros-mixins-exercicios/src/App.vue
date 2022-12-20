<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>

    <hr />

    <p>{{ cpf | formataCpf }}</p>

    <p>{{ nome | inverter }}</p>

    <p>{{ cnpj | formatCNPJ }}</p>

    <!--inver é um filtro criado em main.js de forma personalizada para usar globalmente-->
    <p>{{ cnpj | formatCNPJ | inverter }}</p>

    <hr />

    <p>Filtro por <strong>v-bind</strong> no input</p>

    <input type="text" :value="cpf | formataCpf" />

    <Frutas></Frutas>

    <div>
      <input type="text" v-model="fruta" @keydown.enter="add" />

      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Frutas from "./Frutas.vue";
import frutasMixin from "./frutasMixin";

export default {
  components: { Frutas },
  mixins: [frutasMixin],

  filters: {
    formataCpf(valor) {
      const arr = valor.split("");

      arr.splice(3, 0, ".");

      arr.splice(7, 0, ".");

      arr.splice(11, 0, "-");

      return arr.join("");
    },

    formatCNPJ(valor) {
      const arr = valor.split("");

      arr.splice(2, 0, ".");

      arr.splice(6, 0, ".");

      arr.splice(10, 0, "/");

      arr.splice(15, 0, "-");

      return arr.join("");
    },
  },

  data() {
    return {
      cpf: "60070080090",
      nome: "copo plástico",
      cnpj: "03543917000153",
      cpfInput: "",
      fruta: "",
      frutas: ["banana", "maça", "laranja"],
    };
  },
  methods: {
    add() {
      this.frutas.push(this.fruta);
      this.fruta = "";
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  padding: 10px 10px;
  font-size: 25px;
}
</style>
