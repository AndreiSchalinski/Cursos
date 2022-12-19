<template>
  <div class="container-cards">
    <div v-if="lista.length == 0"><p>Sua vida está em dia</p></div>
    <div v-else style="display: flex; " v-for="(task, i) in lista" :key="i" @click="alterarStatus(task)">
      <div class="card-a-fazer">
        <button id="fecha-card">x</button>
        <p class="text-card">{{ task.nome }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:{lista:Array},

  methods:{
    alterarStatus(task){
      
      if (task.status) {
        task.status = false
      } else {
        task.status = true
      }

      alert(task.status)

    }
  }
};
</script>

<style>
.container-cards {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}

.card-cluido {
  font-size: 25px;
  min-height: 130px;
  width: 250px;
  border-radius: 5px;
  border-left: 12px solid rgb(19, 92, 19);
  background-color: rgba(42, 206, 24, 0.781);
  padding: 5px 5px;
  margin-left: 10px;
  cursor: pointer;
}

.card-a-fazer {
  font-size: 25px;
  min-height: 130px;
  width: 250px;
  border-radius: 5px;
  border-left: 12px solid rgb(179, 27, 0);
  background-color: orangered;
  padding: 5px 5px;
  margin-left: 10px;
  cursor: pointer;
}

.text-card {
  text-align: center;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

#fecha-card {
  position: relative;
  top: -10px;
  left: 230px;
  width: 20px;
  height: 20px;
  border-radius: 117px;
  border: none;
  background-color: rgb(179, 27, 0);
}
</style>