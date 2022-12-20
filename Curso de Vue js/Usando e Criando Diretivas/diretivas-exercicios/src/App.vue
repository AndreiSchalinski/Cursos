<template>
	<div id="app">
		<h1>Diretivas</h1>

		<hr>

		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando direita <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque>Usando diretiva criada por mim</p>
		<p v-destaque-2="'blue'">Usando diretiva criada por mim</p>
		<p v-destaque-3:fundo="'yellow'">Usando diretiva com envio de parâmetro para definir propriedade css a ser aplicada</p>
		<p v-destaque-3="'yellow'">Usando diretiva com envio de parâmetro para definir propriedade css a ser aplicada</p>
		<p v-destaque-4:fundo.vermelho>Usando diretiva com parametro 'trocar' adicionado.</p>
	</div>
</template>

<script>
export default {
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
