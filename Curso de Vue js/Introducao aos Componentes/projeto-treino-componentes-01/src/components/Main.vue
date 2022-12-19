<template>
  <div
    class="
      d-flex
      justify-space-around
      flex-wrap
      align-center
      overflow-auto
      pt-5
    "
  >
    <div v-for="(grafic, i) in grafics.length" :key="i">
      <v-sheet
        class="mb-4 box d-flex align-center"
        color="#15378e75"
        height="450"
        width="450"
      >
        <app-grafico>
          <v-card
            class="mx-auto text-center"
            width="420"
            color="green"
            dark
            style="border-radius: 20px"
          >
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline
                  :value="value"
                  color="rgba(255, 255, 255, .7)"
                  height="200"
                  padding="24"
                  stroke-linecap="round"
                  smooth
                >
                  <template v-slot:label="item"> ${{ item.value }} </template>
                </v-sparkline>
              </v-sheet>
            </v-card-text>

            <v-card-text>
              <div class="text-h4 font-weight-thin">22</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="justify-center">
              <v-btn block text> Go to Report </v-btn>
            </v-card-actions>
          </v-card>
        </app-grafico>
      </v-sheet>
    </div>
  </div>
</template>

<script>
export default {
  name: `Main`,
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760],
    grafics: [
      {
        titulo: "Apontamentos",
      },
      {
        titulo: "Chamados",
      },
      {
        titulo: "Relatórios",
      },
    ],
  }),
};
</script>

<style>
.box {
  border: 1px solid #0bdb26;
  border-radius: 20px;
}
</style>