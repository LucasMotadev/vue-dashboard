const empresaModeracao = {
  items: [
    {
      id_empresa: 1,
      empresa: "Porquinhos li",
      qt_min: 30,
      qt_max: 60
    },

    {
      id_empresa: 2,
      empresa: "Porquinhos li",
      qt_min: 50,
      qt_max: 51
    },

    {
      id_empresa: 3,
      empresa: "Porquinhos li",
      qt_min: 30,
      qt_max: 40
    },

    {
      id_empresa: 4,
      empresa: "Porquinhos li",
      qt_min: 86,
      qt_max: 200
    },

    {
      id_empresa: 5,
      empresa: "Porquinhos li",
      qt_min: 45,
      qt_max: 200
    }
  ],

  get(id_empresa) {
    console.log("id_empresa", id_empresa);
    if (id_empresa == undefined) {
      return this.items;
    }
    console.log("this.items", this.items);
    return this.items.filter(element => element.id_empresa == id_empresa);
  }
};

export default empresaModeracao;
