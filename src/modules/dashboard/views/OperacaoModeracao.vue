<template>
  <v-container grid-list-xs>
    <SectionEmpresaModeracao />
  </v-container>
</template>

<script>
export default {
  components: {
    SectionEmpresaModeracao: () => import("../section/SectionEmpresaModeracao")
  }
};
</script>

<style></style>
