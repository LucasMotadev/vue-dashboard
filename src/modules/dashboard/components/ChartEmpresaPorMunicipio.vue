<template>
  <apexcharts
    type="bar"
    height="335"
    ref="empresaPorMunicipio"
    :options="options"
    :series="series"
  ></apexcharts>
</template>

<script>
import { mapGetters } from "vuex";
import serviceEmpresaPorMunicio from "../services/empresasPorMunicipio";
import { barramento } from "../barramento";
import apexcharts from "vue-apexcharts";
export default {
  components: {
    apexcharts
  },
  data: () => {
    return {
      options: {
        chart: {
          id: "empresa-por-municipio",
          events: {}
        },

        title: {
          text: ""
        },
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return val;
          }
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top"
            }
          }
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val + " Fazendas";
            }
          },
          x: {
            formatter: function(val) {
              return "Municipois " + val;
            }
          }
        },
        stroke: {
          show: true,
          width: 5,
          colors: "transparent"
        },
        xaxis: {
          type: "category"
        }
      },
      series: []
    };
  },

  computed: {
    ...mapGetters({
      getUf: "dashboard/getUf"
    })
  },
  watch: {
    getUf: {
      handler() {
        this.getEmpresaPorEstado(this.getUf);
      },
      deep: true
    }
  },

  methods: {
    async getEmpresaPorEstado(obj = {}) {
      try {
        this.options = {
          title: {
            text: "Empresas por municipio em " + obj.id
          }
        };
        let series = await serviceEmpresaPorMunicio.getEmpresaPorMunicipio(obj);
        this.series = series;
      } catch (error) {
        console.log(error);
      }
    },

    onClickSeriesPorEstado() {
      barramento.$on("clinkSeriresPorEstado", this.getEmpresaPorEstado);
    }
  },

  created() {
    this.onClickSeriesPorEstado();
    this.getEmpresaPorEstado(this.getUf);
  }
};
</script>

<style></style>
