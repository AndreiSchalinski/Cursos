<template>
  <div>
    <h2 class="sub-title">Dashboard</h2>
    <div >
      <Card :listCards="listCards" @emitExcludeAssignment=" id_task = $event, emitExcludeAssigmentFather()" @emitCheckPercentageCompletedFather="emitUpdatePercentageCompletedTasks()"></Card>
    </div>
  </div>
</template>

<script>

import Card from './Card.vue'

export default {

    components:{Card},
    props:{listCards:Array},
    data(){
      return {
        id_task:null,
      }
    },
    methods:{
      emitExcludeAssigmentFather(){
        this.$emit('emitExclusionAssigmentFather', this.id_task)
      },

      emitUpdatePercentageCompletedTasks(){
        this.$emit('emitUpdatePercentageCompletedTasksFather')
      }

    }

}
</script>

<style>





</style>