<template>
  <div class="animate__animated animate__flip">
    <h1 class="title-view">Novo Veículo</h1>

    <v-form v-model="valid">
      <v-container>
        <v-row class="d-flex justify-center flex-column align-center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="nome"
              :rules="nomeRules"
              label="Nome Completo"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="modelo"
              :rules="modeloRules"
              label="Modelo"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="placa"
              :rules="placaRules"
              label="Placa"
              required
            ></v-text-field>
          </v-col>

          <div>
            <v-btn class="mr-2" depressed color="success">CADASTRAR</v-btn>
            <v-btn depressed color="error"> CANCELAR </v-btn>
          </div>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      valid: false,
      nome: "",
      nomeRules: [
        (v) => !!v || "Nome do veículo é obrigatório",
        (v) => v.length >= 10 || "Informe o nome do veículo corretamente",
      ],
      modelo: "",
      modeloRules: [
        (v) => !!v || "Modelo do veículo é obrigatório",
        (v) => v.length >= 10 || "Informe o modelo corretamente",
      ],
      placa: "",
      placaRules: [
        (v) => !!v || "Número da placa do veículo é obrigatório",
        (v) => v.length <= 6 || "Informe o número da placa corretamente",
      ],
    };
  },
};
</script>
  
  <style>
.title-view {
  text-align: center;
  margin: 0 0 50px 0;
}
</style>