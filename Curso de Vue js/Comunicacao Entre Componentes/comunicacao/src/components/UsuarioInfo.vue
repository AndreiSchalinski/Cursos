<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Usuário info: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome()">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reinicar Nome (Calback)</button>
    </div>
</template>

<script>
export default {
    props:{
        nome: {
            type: String,
            required: true //trabalhar com tipagem de dados para propriedade 'nome' em props
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods:{
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome = 'Pedro',
            this.$emit('nomeMudou', this.nome) //criando eventos personalizdos
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
