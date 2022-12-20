<template>
  <div>
    <div class="container">
      <p>Convidado:</p>
      <input
        type="text"
        placeholder="Informe nome"
        v-model="nome"
        @keydown.enter="adicionarConvidados()"
      />
      <button @click="adicionarConvidados()">ADICIONAR</button>
    </div>

    <ListaConvidados>
      <ul v-for="(convidado, i) in lista" :key="i">
        <li @click="confirmarConvidado(convidado)">
          Convidado: {{ convidado.nome }}
        </li>
      </ul>
    </ListaConvidados>

    <Confirmados>
        <ul slot="lista-cadastrados" v-for="(convidado, i) in lista" :key="i">
          <li>Convidado: {{ convidado.nome }} - Status: {{ convidado.status?'Presença Confirmada':'Não confirmou'}}</li>
        </ul>
    </Confirmados>
  </div>
</template>

<script>
import ListaConvidados from "./components/ListaConvidados.vue";
import Confirmados from './components/ConfirmacaoConvidado.vue'

export default {
  components: { ListaConvidados, Confirmados },

  data() {
    return {
      nome: "",
      status: false,
      lista: [],
    };
  },

  methods: {
    adicionarConvidados() {
      this.lista.push({ nome: this.nome, status: this.status});
      this.nome = "";
    },

    confirmarConvidado(convidado) {
      if (convidado.status == false) {
        convidado.status = true
      } else {
        convidado.status = false
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
  width: 20%;
}

ul {
  list-style: none;
}

ul li {
  border-bottom: 1px solid yellowgreen;
  width: 50%;
  padding: 10px 10px;
  font-size: 25px;
}
</style>