export default {
  items: [
    {
      uf: "MT",
      cidade: "Caceres",
      empresa: "Dos porcos LTDA-1",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "MT",
      cidade: "Mirassol",
      empresa: "Dos porcos LTDA-2",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "SP",
      cidade: "Sao Paulo",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "SP",
      cidade: "Campinas",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "RJ",
      cidade: "Favela da Rocinha",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "RJ",
      cidade: "Duque de caxias",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "SC",
      cidade: "Belmonte",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "SC",
      cidade: "Biguaçu",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "AC",
      cidade: "Cruzeiro do Sul",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "AC",
      cidade: "	Cruzeiro do Sul",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "MT",
      cidade: "	Cruzeiro do Sul",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "SP",
      cidade: "	Cruzeiro do Sul",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    },
    {
      uf: "SP",
      cidade: "Cruzeiro do Sul",
      empresa: "Dos porcos LTDA",
      protietario: "Jose dos porcos",
      faturamento_mes: 1000
    }
  ],

  getEmpresaPorEstado(obj = {}) {
    return this.items.filter(element => element.uf == obj.id);
  }
};
