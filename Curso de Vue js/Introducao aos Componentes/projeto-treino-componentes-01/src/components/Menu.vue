<template>
  <v-row style="padding-top: 23px;" justify="center">
    <v-expansion-panels accordion>
      <v-expansion-panel v-for="(item, i) in menu" :key="i">
        <v-expansion-panel-header color="#112651" style="border-bottom: 1px solid #128ef0; color: white; font-size: 20px;">{{ item.titulo }}</v-expansion-panel-header>
        <v-expansion-panel-content class="white--text" color="#0c32b1" style="" v-for="(itens, i) in item.itens" :key="i">
          <p style="margin: 10px 0 0 0; font-size: 20px;">{{ itens.tituloItem }}</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
  name: `Menu`,
  data: () => ({
    menu: [
      {
        titulo: "Dashboard",
        itens: [
          { tituloItem: "Apontamentos" },
          { tituloItem: "Chamados" },
          { tituloItem: "Relatórios" },
        ],
      },
      {
        titulo: "Processos",
        itens: [
          { tituloItem: "Atendimentos" },
          { tituloItem: "Contratos" },
          { tituloItem: "Vendas" },
        ],
      },
      {
        titulo: "Estoque",
        itens: [
          { tituloItem: "Entradas" },
          { tituloItem: "Saídas" },
          { tituloItem: "Relatórios" },
        ],
      },
      {
        titulo: "Financeiro",
        itens: [
          { tituloItem: "Balanço Patrimonial" },
          { tituloItem: " Relatórios" },
          { tituloItem: "NFE'S" },
          { tituloItem: "Caixa" },
        ],
      },
      {
        titulo: "Usuários",
        itens: [
          { tituloItem: "Cadastrar" },
          { tituloItem: "Filtrar" }
        ],
      },
    ],
  }),
};
</script>

<style>
</style>