<template>
  <v-container grid-list-xs>
    <v-card>
      <v-row>
        <v-col cols="12" md="4" sm="12" lg="4">
          <ChartEmpresaPorEstado />
        </v-col>
        <v-col cols="12" md="8" sm="12" lg="8">
          <TableEmpresaPorEstado />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  components: {
    ChartEmpresaPorEstado: () => import("../components/ChartEmpresaPorEstado"),
    TableEmpresaPorEstado: () => import("../components/TableEmpresaPorEstado")
  },
  data() {
    return {};
  }
};
</script>

<style></style>
