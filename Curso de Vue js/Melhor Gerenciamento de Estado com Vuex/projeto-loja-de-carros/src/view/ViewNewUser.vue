<template>
  <div class="animate__animated animate__flip">
    <h1 class="title-view">Novo Usuário</h1>

    <v-form v-model="valid">
      <v-container>
        <v-row class="d-flex justify-center flex-column align-center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="Nome Completo"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              counter
              @click:append="show1 = !show1"
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
      firstname: "",
      nameRules: [
        (v) => !!v || "Nome é obrigatório",
        (v) => v.length >= 10 || "Nome pode ter no mínimo 10 caractéres",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail é obrigatório",
        (v) => /.+@.+/.test(v) || "E-mail é inválido",
      ],
      show1: false,
      password: "",
      rules: {
        required: (value) => !!value || "Password é obrigatório",
        min: (v) => v.length >= 8 || "Pode ter mínimo 8 caractéres",
        emailMatch: () => "sdfsdf",
      },
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