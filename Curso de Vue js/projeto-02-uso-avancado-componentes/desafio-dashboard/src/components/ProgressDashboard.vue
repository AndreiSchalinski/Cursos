<template>
  <div>
    <h2 class="sub-title">Progresso</h2>
    <div class="container-progress">
        <p class="text-progress" :style="{color: percentageCompletedTasks == 0 || percentageCompletedTasks < 55 ?'white':'black'}">{{ percentageCompletedTasks }}%</p>
        <div class="progress" :style="{width: percentageCompletedTasks+'%'}"></div>
    </div>
  </div>
</template>

<script>
export default {

    props:{percentageCompletedTasks:Number}

}
</script>

<style>

.container-progress{
    width: 100%;
    height: 50px;
    border: 1px solid #00e1ff65;
    border-radius: 5px;
}

.progress{
    background-color: lightgreen;
    height: 50px;
    width: 100%;
    transition: 2s;
    border-radius: 5px;
}

.text-progress{
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    position: absolute;
    left: 50%;
}

</style>