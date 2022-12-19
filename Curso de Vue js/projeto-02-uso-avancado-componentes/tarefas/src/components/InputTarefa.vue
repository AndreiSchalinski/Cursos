<template>
  <div class="container-input">
    <div class="container-inputs">
      <input
        id="input"
        class="inputs"
        v-model="nome"
        type="text"
        placeholder="Nova tarefa:"
        @keydown.enter="adicionarTarefa()"
      /><button id="btn" class="inputs" @click="adicionarTarefa()">+</button>
    </div>


    <app-cards-tarefa :lista="lista"></app-cards-tarefa>


  </div>
</template>

<script>

import CardsTarefas from './CardsTarefas.vue'

export default {

  components:{'app-cards-tarefa': CardsTarefas},

  data() {
    return {
      nome:'',
      lista: []
    };
  },
  methods: {
    adicionarTarefa() {

      let task = {
        nome: this.nome,
        status: false
      }

      this.lista.push({nome:this.nome, status:false})

      this.nome = ''

    },
  },
};
</script>

<style>
.container-input {
  margin: auto;
}

#input {
  border: 1px solid rgb(3, 199, 248);
  padding: 0px 10px;
  font-size: 20px;
}

.container-inputs {
  display: flex;
  align-items: center;
}

.inputs {
  height: 43px;
  width: 400px;
  background-color: rgba(29, 69, 128, 0.432);
}

#btn {
  border: 1px solid rgb(3, 199, 248);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  outline: none;
  width: 50px;
  height: 45px;
  font-size: 30px;
  border-left: none;
}

#btn:hover {
  cursor: pointer;
  background-color: rgb(3, 199, 248);
}
</style>