export default {
  series: [
    {
      uf: "MT",
      minicipio: "Caceseres",
      id: 1,
      qt: 10
    },
    {
      uf: "MT",
      minicipio: "Araputanga",
      id: 2,
      qt: 5
    },
    {
      uf: "MT",
      minicipio: "Jauru",
      id: 3,
      qt: 8
    },
    {
      uf: "MT",
      minicipio: "Comodoro",
      id: 4,
      qt: 3
    },
    {
      uf: "MT",
      minicipio: "Mirassol",
      id: 5,
      qt: 9
    },
    {
      uf: "SP",
      minicipio: "Mirassol-SP",
      id: 5,
      qt: 15
    },
    {
      uf: "SP",
      minicipio: "São paulo",
      id: 5,
      qt: 7
    },
    {
      uf: "RJ",
      minicipio: "Municipio-1",
      id: 5,
      qt: 6
    },
    {
      uf: "RJ",
      minicipio: "Municipio-2",
      id: 5,
      qt: 9
    },
    {
      uf: "SC",
      minicipio: "Municipio-1",
      id: 5,
      qt: 8
    },
    {
      uf: "SC",
      minicipio: "Municipio-2",
      id: 5,
      qt: 10
    },
    {
      uf: "AC",
      minicipio: "Municipio-AC 2",
      id: 5,
      qt: 20
    },
    {
      uf: "AC",
      minicipio: "Municipio-AC 1",
      id: 5,
      qt: 15
    }
  ],

  async getEmpresaPorMunicipio(obj) {
    let data = [];
    let series = [];
    this.series.map(element => {
      if (element.uf == obj.id) {
        data.push({
          x: element.minicipio,
          y: element.qt
        });
      }
    });
    series.push({ color: obj.color, data });
    return series;
  }
};
