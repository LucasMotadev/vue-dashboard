import simplesLoads from "./simplesLoad";
import { events } from "../events";
const loads = {
  install(Vue, args = {}) {
    if (this.installed) {
      return;
    }
    Vue.component(args.component || "simplesLoad", simplesLoads);

    const simplesLoad = params => {
      params = !!params;
      events.$emit("addSimplesLoad", params);
    };

    Vue.prototype.$simplesLoad = simplesLoad;
  }
};

export default loads;
