<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>

    <hr />

    <b-button variant="primary" class="mb-4" @click="exibir = !exibir"
      >Monstrar Mensagem</b-button
    >

    <transition name="fade">
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>

    <transition name="slide" type="animation">
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>

    <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition>

    <transition enter-active-class="animated bounce" leave-active-class="animated shake">
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition>

	<hr>

	<b-select v-model="tipoAnimacao" class="mb-4">
		<option value="animated bounce">Fade</option>
		<option value="animated shake">Slide</option>
	</b-select>

	<transition :enter-active-class="tipoAnimacao" :leave-active-class="tipoAnimacao" mode="out-in">
		<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
		<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
	  </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Uma mensagem de informação para usuário",
      exibir: false,
	  tipoAnimacao:'animated bounce'
    };
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
  font-size: 1.5rem;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 2s;
}

.fade-leave-to {
  opacity: 0;
}

/*------------key frames------------*/
/*KEY FRAMES É PARA TRABALHAR COM ESTILIZAÇÃO MAIS PERSONALIZADA, ON PRECISA ESPECIFICAR MAIS PROPRIEDADES PARA UM DETERMINADO ELEMENTO*/

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease; /*significa 'usar este algoritmo para fazer essa transição'*/
  transition: opacity 2s;
}

.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter-active {
  animation: slide-in 2s ease; /*significa 'usar este algoritmo para fazer essa transição'*/
}

.slide-leave-active {
  animation: slide-out 2s ease;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
