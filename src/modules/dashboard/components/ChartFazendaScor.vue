<template>
  <apexcharts
    type="bar"
    ref="fazendaScor"
    :options="options"
    :series="series"
  ></apexcharts>
</template>

<script>
import serviceFazedaScor from "../services/fazendaScor";
import apexcharts from "vue-apexcharts";
export default {
  components: {
    apexcharts
  },
  data: () => {
    return {
      options: {
        chart: {
          id: "fazenda-scor"
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
