<template>
  
    <div class="container-new-card">
        <h1 class="title">Nova Tarefa</h1>
        <div class="container-input-new-card">
            <input class="input-text" type="text" placeholder="Informe a tarefa" v-model="assignment" @keydown.enter="emitIssueAssignment()">
            <button @click="emitIssueAssignment()" class="btn">CRIAR</button>
        </div>
    </div>

</template>

<script>
export default {

    data(){
        return {
            assignment:''
        }
    },

    methods:{

        cleanAssignment(){
            this.assignment = ''
        },

        emitIssueAssignment(){
            this.$emit('emitNewAssignment', this.assignment)
            this.cleanAssignment()
        }
    }

}
</script>

<style>

.title{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}

.container-new-card{
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.container-input-new-card{
    margin: auto;
    display: flex;
    align-items: center;
}

.input-text{
    height: 40px;
    width: 500px;
    outline: none;
    font-size: 20px;
    padding: 0 10px;
    border: 1px solid #00e0ff;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.btn{
    height: 42px;
    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 15px;
    padding: 5px 20px;
    background-color: #00e0ff;
    color: rgb(60, 54, 54);
    font-weight: bold;
    cursor: pointer;
}

</style>