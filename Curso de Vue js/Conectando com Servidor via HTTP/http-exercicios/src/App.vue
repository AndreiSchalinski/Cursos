<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>

	<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>

    <b-card>
      <b-form-group label="Nome">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.nome"
          placeholder="Informe o Nome"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="E-mail">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.email"
          placeholder="Informe o e-mail"
        ></b-form-input>
      </b-form-group>
      <hr />
      <b-button size="lg" variant="primary" @click="salvar">Salvar</b-button>
	  <b-button class="ml-2" size="lg" variant="success" @click="obterUsuarios">Obter Usuários</b-button>
    </b-card>

	<hr>

	<b-list-group>
		<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
			<strong>Id: </strong>{{ id }}<br>
			<strong>Nome: </strong>{{ usuario.nome }}<br>
			<strong>E-mail: </strong>{{ usuario.email }}<br>
			<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
			<b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)">Excluir</b-button>
		</b-list-group-item>
	</b-list-group>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  //testar conexão enviando json com objeto para salvar no banco de dados
  //created(){
  //this.$http.post('usuarios.json',{
  //nome:'andrei',
  //emai:'ndrei@hotmail.com'
  //})
  //}

  data() {
    return {
	  mensagens:[],
	  usuarios:[],
	  id:null,
      usuario: {
        nome: "",
        email: "",
      },
    };
  },
  methods: {

	limpar(){
		this.id = null
		this.usuario.nome = ""
	  	this.usuario.email = ""
		this.mensagens = ""
	},

	carregar(id){
		this.id = id
		this.usuario = {...this.usuarios[id]}
	},

	excluir(id){
		this.$http.delete(`/usuarios/${id}.json`).then(_ => {this.obterUsuarios()}).catch(_ => {this.mensagens.push({texto:'Erro ao excluir usuário',tipo:'danger'})})
		this.id = null
		this.usuario.nome = ""
	  	this.usuario.email = ""
		this.mensagens = ""
	},

    salvar() {
      //axios.post("usuarios.json", this.usuario).then(() => this.limpar())

		const metodo = this.id? 'patch':'post'

		const finalUrl = this.id? `/${this.id}.json`:'.json'

		this.$http[metodo](`/usuarios${finalUrl}`, this.usuario).then(_ => {
			this.mensagens.push({
				texto:'Operação realizada com sucesso!',
				tipo:'success'
			})

			this.id = ''
			this.usuario.nome = ''
			this.usuario.email = ''

			this.obterUsuarios()
		}).catch(err => {this.mensagens.push({
			texto:'Problema na operação',
			tipo:'danger'
		})})

		// o then é uma promisse, assim caso a requisição seja bem sucedido ele retorna sucesso

    },

	obterUsuarios(){
		this.$http.get('usuarios.json').then(resp => {
			this.usuarios = resp.data
			
		})

		axios.defaults.headers.common['Authorization'] = 'abc123' //token de autorização para executar requisição
	}
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
