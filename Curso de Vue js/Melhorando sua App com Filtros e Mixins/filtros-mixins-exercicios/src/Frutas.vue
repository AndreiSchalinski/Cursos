<template>
  <div>
    <input type="text" v-model="fruta" @keydown.enter="add" />

    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
</style>