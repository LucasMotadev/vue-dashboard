import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Notify from "./helpers/notifications/Notify";
import Loads from "./helpers/loads";
import VueApexCharts from "vue-apexcharts";

Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;

Vue.use(Notify);
Vue.use(Loads);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
