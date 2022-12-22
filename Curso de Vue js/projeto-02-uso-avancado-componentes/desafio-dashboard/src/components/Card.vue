<template>
  <div >
    <div v-if="listCards.length != 0" class="container-cards">
      <div class="card" v-for="(card, id) in listCards" :key="id" @click="card.finished = !card.finished, emitCheckPercentageCompletedTasks()" :class="{'card-finished':card.finished}">
        <button class="btn-exclude-card" @click="emitExcludeAssignment(id)">X</button>
        <div class="container-text-card">
          <p class="text-card"><strong>Início:</strong> {{new Date().toTimeString()}}</p><br>
          <p class="text-card"><strong>Descrição: </strong></p>
          <p class="text-card" style="line-height: 18px;">{{ card.assignment }}</p>
        </div>
      </div>
    </div>
    <div v-else class="container-cards">
      <p class="message-null-cards">Sua dashboard está sem tarefas :) !</p>
    </div>
  </div>
</template>

<script>
export default {

    props:{listCards:Array},
    data(){
      return {
        id_task:null
      }
    },
    methods:{
      emitExcludeAssignment(i){
        this.id_task = i
        this.$emit('emitExcludeAssignment', this.id_task)
      },
      emitCheckPercentageCompletedTasks(){
        this.$emit('emitCheckPercentageCompletedFather')
      }
    }

};
</script>

<style>

.container-cards{
  width: 100%;
  max-height: 500px;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
}

.card{
    width: 300px;
    height: 150px;
    margin: 10px auto 10px auto;
    background-color: lightcoral;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.363) ;
}

.text-card{
  margin: 0;
  word-break: break-all;
  font-family: Arial, Helvetica, sans-serif;
}

.container-text-card{
  -webkit-box-shadow: inset 2px -1px 124px 15px rgba(255,255,255,0.33);
  -moz-box-shadow: inset 2px -1px 124px 15px rgba(255,255,255,0.33);
  box-shadow: inset 2px -1px 124px 15px rgba(255,255,255,0.33);
  margin: 25px 0 0 0;
  height: 120px;
  overflow: auto;
  padding: 2px 5px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.235);
}

.card:active{
  border: 2px solid #00e0ff;
}

.card-finished{
  background-color: lightgreen;
  text-decoration: line-through;
}

.btn-exclude-card, .btn-edit-card{
  float: right;
  border-radius: 15px;
  font-size: 10px;
  padding: 4px 6px;
  border: none;
  background-color: rgba(255, 255, 255, 0.294);
  font-weight: bold;
  color: rgba(0, 0, 0, 0.392);
}
.btn-exclude-card:hover{
  background-color: red;
}

.btn-edit-card{
  margin-right: 5px;
  background-color: rgba(255, 255, 255, 0.294);
}

.btn-edit-card:hover{
  background-color: lightgoldenrodyellow;
}

.message-null-cards{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  color: white;
}

</style>