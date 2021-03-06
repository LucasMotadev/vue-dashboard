export default {
  items: [
    {
      fazenda: "Fazenda-1",
      pj: "20"
    },
    {
      fazenda: "Fazenda-2",
      pj: "10"
    },
    {
      fazenda: "Fazenda-3",
      pj: "2"
    },
    {
      fazenda: "Fazenda-4",
      pj: "30"
    }
  ],

  getFazendaPj(e) {
    let data = [];
    let categories = [];
    let series = [];
    this.items.forEach(item => {
      categories.push(item.fazenda);
      data.push(item.pj);
    });

    series.push({
      color: e.color,
      name: "",
      data
    });

    return { series, categories };
  }
};
