<template>
  <div class="animate__animated animate__flip">
    <h1 class="title-view">Usuários Cadastrados</h1>

    <v-form v-model="valid">
      <v-container>
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="Nome Completo"
              required
            ></v-text-field>
          </v-col>

          <div>
            <v-btn class="mr-2" depressed color="primary">BUSCAR</v-btn>
          </div>
        </v-row>
      </v-container>
    </v-form>

    <h3 class="title-view">Resultado</h3>

    <div class="d-flex justify-center">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nome</th>
              <th class="text-left">E-mail</th>
              <th class="text-left">Password</th>
              <th class="text-left">Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in lista" :key="user">
              <td>{{ user.nome }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.password }}</td>
              <td>
                <v-btn class="mr-2" depressed color="success">CARREGAR</v-btn>
                <v-btn depressed color="error"> EXCLUIR </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
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
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
      headers: [
        { text: "Nome", value: "nome" },
        { text: "E-mail", value: "email" },
        { text: "Password", value: "password" },
        { text: "Opções" },
      ],
      lista: [
        {
          nome: "Andrei",
          email: "andrei@hotmail.com",
          password: "1321654",
        },
        {
          nome: "Andrei",
          email: "andrei@hotmail.com",
          password: "1321654",
        },
        {
          nome: "Andrei",
          email: "andrei@hotmail.com",
          password: "1321654",
        },
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