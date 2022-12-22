<template>
  
  <div id="app">

    <NewCard @emitNewAssignment="assignment = $event,createNewCard()"></NewCard>

    <Progress :percentageCompletedTasks="percentageCompletedTasks" ></Progress>

    <Dashboard :listCards="listCards" @emitExclusionAssigmentFather=" id_task = $event, excludeAssigment()" @emitUpdatePercentageCompletedTasksFather="updatePercentageCompletedTasks()"></Dashboard>

  </div>

</template>

<script>

import NewCard from './components/NewCard.vue'
import Progress from './components/ProgressDashboard.vue'
import Dashboard from './components/Dashboard.vue'

export default {

  components:{NewCard,Progress,Dashboard},
  data(){
    return {
      assignment:'',
      id_task:null,
      percentageCompletedTasks:0,
      listCards:[]
    }
  },
  methods:{

    createNewCard(){
      this.listCards.push({assignment:this.assignment, finished:false})
      this.updatePercentageCompletedTasks()
    },

    excludeAssigment(){
      this.listCards.splice(this.id_task, 1)
    },

    updatePercentageCompletedTasks(){

      this.percentageCompletedTasks = 0
      
      for (let i = 0; i < this.listCards.length; i++) {
        
        if (this.listCards[i].finished) {
          this.percentageCompletedTasks++
        }
        
      }

      this.percentageCompletedTasks = Math.floor(100*(this.percentageCompletedTasks/this.listCards.length))
      this.percentageCompletedTasks = Number.isNaN(this.percentageCompletedTasks)?0:this.percentageCompletedTasks

    }

  }

}
</script>

<style>

html{
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,98,121,1) 49%, rgba(9,9,121,1) 100%);
  height: 100%;
}

#app{
  width:51%;
  margin: auto;
}

.sub-title{
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin: 20px 0 5px 0;

}

</style>