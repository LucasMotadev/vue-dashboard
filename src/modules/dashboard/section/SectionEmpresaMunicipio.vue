<template>
  <v-container grid-list-xs>
    <v-card>
      <v-row>
        <v-col md="4" sm="12" lg="4">
          <ChartEmpresaPorMunicipio />
        </v-col>
        <v-col md="8" sm="12" lg="8">
          <TableEmpresaPorMunicipio />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  components: {
    ChartEmpresaPorMunicipio: () =>
      import("../components/ChartEmpresaPorMunicipio"),
    TableEmpresaPorMunicipio: () =>
      import("../components/TableEmpresaPorMunicipio")
  }
};
</script>

<style></style>
