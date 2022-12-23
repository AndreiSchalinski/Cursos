<template>
  <v-row justify="center" class="container-menu-nav">
    <v-expansion-panels accordion>
      <v-expansion-panel v-for="(option, i) in menuList" :key="i">
        <v-expansion-panel-header color="#0b6c78"> <router-link :to="`${option.path}`" tag="li" ><a id="btn-link">{{option.title}}</a></router-link> </v-expansion-panel-header>
        <v-expansion-panel-content
          color="#0b6c78"
          class="border-submenu-buttom"
          v-for="(option, j) in menuList[i].subTitle"
          :key="j"
        >
          <router-link :to="`${option.path}`" tag="li"
            ><a id="btn-link-subtitle">{{ option.title }}</a></router-link
          >
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: "Dashboard",
          path:'/'
        },
        {
          title: "Veículo",
          path:'/veiculo',
          subTitle: [
            {
              title: "Cadastrar",
              path: "/veiculo/cadastrar",
            },
            {
              title: "Listar",
              path: "/veiculo/listar",
            },
          ],
        },
        {
          title: "Financeiro",
          path:'/financeiro',
        },
        {
          title: "Usuários",
          path:'/usuario',
          subTitle: [
            {
              title: "Cadastrar",
              path: "/usuario/cadastrar",
            },
            {
              title: "Listar",
              path: "/usuario/listar",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.container-menu-nav {
  margin: 22px 0 0 0;
}

#btn-link, #btn-link-subtitle{
  color: white;
  text-decoration:none
}

.menu-buttom{
  text-decoration:none
}

.border-submenu-buttom {
  border-bottom: 1px solid red;
}

.border-submenu-buttom p {
  margin: 10px 0 0 0;
}
</style>