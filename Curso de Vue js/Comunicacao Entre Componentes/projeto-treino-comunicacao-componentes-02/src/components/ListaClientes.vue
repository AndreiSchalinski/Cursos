<template>
  
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Data Agendamento</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(paciente, i) in lista" :key="i" @click="setPacienteSelecionado(paciente)">
                    <td>{{ paciente.id }}</td>
                    <td>{{ paciente.nome }}</td>
                    <td>{{ paciente.idade }}</td>
                    <td>{{ paciente.dataAgendamendo }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>

import barramento from '../barramento'

export default {

    props:{lista:Array},

    methods:{
        setPacienteSelecionado(paciente){
            barramento.setPacienteSelecionado(paciente)
        }
    }

}
</script>

<style>

table thead tr th{
    background-color: burlywood;
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid white;
    padding: 20px 50px;
}

table tbody tr td{
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid white;
    padding: 20px 50px;
}

</style>