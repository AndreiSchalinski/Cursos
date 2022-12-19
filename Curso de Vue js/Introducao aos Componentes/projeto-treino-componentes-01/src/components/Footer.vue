<template>
  <v-footer color="#112651" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col style="border-top: 1px solid #128ef0;" class="py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Andrei Schalinski</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: `Footer`,
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
};
</script>

<style>
</style>