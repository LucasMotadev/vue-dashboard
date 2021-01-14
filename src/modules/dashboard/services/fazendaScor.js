export default {
  items: [
    {
      fazenda: "Fazenda-1",
      scor: "30"
    },
    {
      fazenda: "Fazenda-2",
      scor: "50"
    },
    {
      fazenda: "Fazenda-3",
      scor: "60"
    },
    {
      fazenda: "Fazenda-4",
      scor: "70"
    },
    {
      fazenda: "Fazenda-5",
      scor: "80"
    },
    {
      fazenda: "Fazenda-6",
      scor: "50"
    }
  ],

  getFazendaScor() {
    let data = [];
    let categories = [];
    let series = [];
    this.items.forEach(item => {
      categories.push(item.fazenda);
      data.push(item.scor);
    });

    series.push({
      color: "#00FA9A",
      name: "",
      data
    });

    return { series, categories };
  }
};
