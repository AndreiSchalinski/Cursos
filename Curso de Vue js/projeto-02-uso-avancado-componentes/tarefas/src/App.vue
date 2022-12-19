<template>
	<div id="app">
		<h1>Tarefas</h1>

		<div class="container">

			<app-input-card></app-input-card>

		</div>

	</div>
</template>

<script>

import InputCard from './components/InputTarefa.vue'

export default {
	components:{'app-input-card': InputCard}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}

	.container{
		padding: 20px 0;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

</style>
