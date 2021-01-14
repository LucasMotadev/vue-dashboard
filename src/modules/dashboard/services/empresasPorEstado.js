export default {
  series: [
    {
      uf: "MT",
      id: 1,
      qt: 15
    },
    {
      uf: "SP",
      id: 2,
      qt: 20
    },
    {
      uf: "RJ",
      id: 3,
      qt: 10
    },
    {
      uf: "SC",
      id: 4,
      qt: 15
    },
    {
      uf: "AC",
      id: 4,
      qt: 8
    }
  ],

  getEmpresaPorEstadoAll() {
    let categories = [];
    let series = [];
    categories.push("fazendas");
    this.series.map(element => {
      series.push({
        name: element.uf,
        data: [element.qt]
      });
    });

    return { series, categories };
  }
};
