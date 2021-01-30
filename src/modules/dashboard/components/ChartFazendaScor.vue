<template>
  <apexcharts
    type="bar"
    ref="fazendaScor"
    :options="chartOpiton"
    :series="series"
  ></apexcharts>
</template>

<script>
import serviceFazedaScor from "../services/fazendaScor";
import apexcharts from "vue-apexcharts";
import { barramento } from "../barramento";
export default {
  components: {
    apexcharts
  },
  data() {
    return {
      options: {
        chart: {
          id: "fazenda-scor",
          events: {
            click: (event, chartContext, config) => {
              barramento.$emit("click:seriesFazendaScor", {
                id: this.series[config.seriesIndex]?.name,
                color: config.globals.fill.colors[config.seriesIndex]
              });
            }
          }
        },
        title: {
          text: "Fazenda Scor"
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
              return val + " Scor";
            }
          },
          x: {
            formatter: function(val) {
              return "Fazenda: " + val;
            }
          }
        },
        stroke: {
          show: true,
          width: 5,
          colors: "transparent"
        },
        xaxis: {
          categories: []
        }
      },
      series: []
    };
  },

  computed: {
    chartOpiton() {
      return this.options;
    }
  },

  methods: {
    getFazendaScor() {
      try {
        let { series, categories } = serviceFazedaScor.getFazendaScor();
        this.series = series;
        this.options.xaxis.categories = categories;
      } catch (error) {
        console.log(error);
      }
    }
  },

  created() {
    this.getFazendaScor();
  }
};
</script>

<style></style>
