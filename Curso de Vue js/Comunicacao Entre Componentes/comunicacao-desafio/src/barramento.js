import Vue from 'vue'

export default new Vue({
    methods:{
        setUsuarioSelecionado(usuario){
            this.$emit('usuarioSelecionado', usuario)
        },

        //função para ouvir sempre que houver um evento de usuário selecionado
        onUsuarioSelecionado(calback){
            this.$on('usuarioSelecionado', calback)
        }
    }
})