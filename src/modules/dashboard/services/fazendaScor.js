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
    let series = [];
    let categories = ["scor"];
    this.items.forEach(item => {
      series.push({
        name: item.fazenda,
        data: [item.scor]
      });
    });

    return { series, categories };
  }
};
