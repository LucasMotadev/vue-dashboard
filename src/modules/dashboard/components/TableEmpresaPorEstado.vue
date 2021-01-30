<template>
  <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-0"
    :items-per-page="5"
  >
    <template v-slot:[`item.status`]="{ item }">
      <v-icon :color="status(item.faturamento_mes).color">{{
        status(item.faturamento_mes).icon
      }}</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";
import tableEmpresaService from "../services/tableEmpresaPorEstado";
import { barramento } from "../barramento";
export default {
  data() {
    return {
      headers: [
        {
          text: "UF",
          value: "uf"
        },
        {
          text: "Empresa",
          value: "empresa"
        },
        {
          text: "Protrietario",
          value: "protietario"
        },
        {
          text: "Media Faturamento Mes",
          value: "faturamento_mes"
        },
        {
          text: "status",
          value: "status"
        }
      ],
      items: []
    };
  },
  computed: {
    ...mapGetters({
      getUf: "dashboard/getUf"
    })
  },
  methods: {
    status(value) {
      if (value > 800) {
        return {
          icon: "mdi mdi-arrow-up",
          color: "success"
        };
      }
      return {
        icon: "mdi mdi-arrow-down",
        color: "error"
      };
    },
    getEmpresaPorEstado(obj = {}) {
      this.items = tableEmpresaService.getEmpresaPorEstado(obj.id);
    },
    onClickSeriesEmpresaPorEstado() {
      barramento.$on("click:seriresPorEstado", this.getEmpresaPorEstado);
    }
  },
  mounted() {
    this.onClickSeriesEmpresaPorEstado();
    this.getEmpresaPorEstado(this.getUf);
  }
};
</script>

<style></style>
