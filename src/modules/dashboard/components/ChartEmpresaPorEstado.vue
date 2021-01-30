<template>
  <apexcharts
    type="bar"
    height="335"
    ref="chartPorEstado"
    :options="chartOption"
    :series="series"
  ></apexcharts>
</template>

<script>
import { mapActions } from "vuex";
import empresasPorEstadoService from "../services/empresasPorEstado";
import { barramento } from "../barramento";
import apexcharts from "vue-apexcharts";
export default {
  components: {
    apexcharts
  },
  data() {
    return {
      options: {
        chart: {
          id: "EmpresaPorEstado",
          events: {
            click: (event, chartContext, config) => {
              barramento.$emit("click:seriresPorEstado", {
                id: this.series[config.seriesIndex].name,
                color: config.globals.fill.colors[config.seriesIndex]
              });
              // The last parameter config contains 0dditional information like `seriesIndex` and `dataPointIndex` for cartesian charts
            },
            mounted: (chartContext, config) => {
              const obj = {
                id: this.series[0].name,
                color: config.globals.fill.colors[0]
              };
              this.actionUf(obj);
            }
          }
        },

        title: {
          text: "Empresas por Estado"
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
              return "Estado " + val;
            }
          }
        },
        stroke: {
          show: true,
          width: 5,
          colors: "transparent"
        },
        xaxis: {
          categories: [""]
        }
      },
      series: []
    };
  },
  computed: {
    chartOption() {
      return this.options;
    }
  },

  methods: {
    ...mapActions({
      actionUf: "dashboard/actionUf"
    }),
    async getEmpresaPorEstado() {
      try {
        let {
          series,
          categories
        } = await empresasPorEstadoService.getEmpresaPorEstadoAll();
        this.series = series;
        this.$set(this.options.xaxis.categories, categories);
      } catch (error) {
        console.log(error);
      }
    }
  },

  created() {
    this.getEmpresaPorEstado();
  }
};
</script>

<style></style>
