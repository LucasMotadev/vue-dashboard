<template>
  <apexcharts
    type="bar"
    ref="fazendaScor"
    :options="options"
    :series="series"
  ></apexcharts>
</template>

<script>
import serviceFazendasUltilizamPj from "../services/fazendasUltilizamPj";
import apexcharts from "vue-apexcharts";
export default {
  components: {
    apexcharts
  },
  data: () => {
    return {
      options: {
        chart: {
          id: "fazenda-pj"
        },
        title: {
          text: "Fazendas PJ"
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
              return val + " PJ";
            }
          },
          x: {
            formatter: function(val) {
              return "Ultilizam: " + val;
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
    chartOpiton() {
      return this.options;
    }
  },

  methods: {
    getFazendaPj() {
      try {
        let { series, categories } = serviceFazendasUltilizamPj.getFazendaPj();
        this.series = series;
        this.options.xaxis.categories = categories;
      } catch (error) {
        console.log(error);
      }
    }
  },

  created() {
    this.getFazendaPj();
  }
};
</script>

<style></style>
