import Vue from 'vue'

export default new Vue({
    methods:{
        setPacienteSelecionado(paciente){
            this.$emit('pacienteSelecionado', paciente)
        },

        onPacienteSelecionado(calback){
            this.$on('pacienteSelecionado', calback)
        }
    }
})