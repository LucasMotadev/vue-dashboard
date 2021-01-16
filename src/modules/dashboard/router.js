export default [
  {
    name: "dashboard",
    path: "dashboard",
    component: () => import("./views/Index.vue")
  },
  {
    name: "operacao-moderacao",
    path: "operacao-moderacao",
    component: () => import("./views/OperacaoModeracao.vue")
  }
];
