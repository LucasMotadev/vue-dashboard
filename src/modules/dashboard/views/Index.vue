<template>
  <v-container grid-list-xs>
    <SectionFazPorEstado />
    <SectionEmpresaPorMunicipio />
    <section-cards-fazendas />
    <section-fazenda-scors />
  </v-container>
</template>

<script>
import SectionCardsFazendas from "../section/SectionCardsFazendas.vue";
import SectionFazendaScors from "../section/SectionFazendaScors.vue";
export default {
  components: {
    SectionFazPorEstado: () => import("../section/SectionEmpresaEstado"),
    SectionEmpresaPorMunicipio: () =>
      import("../section/SectionEmpresaMunicipio"),
    SectionCardsFazendas,
    SectionFazendaScors
  },
  name: "dashboard",
  data() {
    return {
      title: "Dashboard"
    };
  }
};
</script>

<style></style>
