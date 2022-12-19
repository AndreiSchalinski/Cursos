<template>
  
    <div class="agenda">
        <ul>
            <li v-if="!usuario">paciente não selecionado</li>
            <li v-else>Id: {{ usuario.id }} - Nome: {{ usuario.nome }} - Idade: {{ usuario.idade }} - Agendamento: {{ usuario.dataAgendamendo }}</li>
        </ul>
    </div>

</template>

<script>

import barramento from '@/barramento';

export default {

    data(){
        return {
            usuario:null
        }
    },

    created(){
        barramento.onPacienteSelecionado(pacienteSelecionado => {
            this.usuario = pacienteSelecionado
        })
    }

}
</script>

<style>

.agenda{
    width: 50%;
    height: 50%;
    color: white;
    text-align: center;
}

ul{
    list-style-type: none;
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
}

</style>