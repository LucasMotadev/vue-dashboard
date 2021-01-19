<template>
  <v-container grid-list-xs>
    <TableEmpresaModeracao />
    <TableFazendaModeracao />
  </v-container>
</template>

<script>
export default {
  components: {
    TableEmpresaModeracao: () => import("../components/TableEmpresaModeracao"),
    TableFazendaModeracao: () => import("../components/TableFazendaModeracao")
  }
};
</script>

<style></style>
