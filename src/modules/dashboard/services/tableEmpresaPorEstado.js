export default {
  items: [
    {
      uf: "MT",
      empresa: "Dos porcos LTDA-1",
      protietario: "Jose dos porcos",
      faturamento_mes: 500
    },
    {
      uf: "MT",
      empresa: "Dos porcos LTDA-2",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "SP",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 600
    },
    {
      uf: "SP",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "RJ",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "RJ",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "SC",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "SC",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "AC",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "AC",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "MT",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 700
    },
    {
      uf: "SP",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "SP",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 350
    }
  ],

  getEmpresaPorEstado(uf = "MT") {
    return this.items.filter(element => element.uf == uf);
  }
};
