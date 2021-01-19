<template>
  <v-container grid-list-xs>
    <v-card-title primary-title>
      Moderação e Operação
    </v-card-title>

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
