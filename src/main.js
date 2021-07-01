import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "./plugins/base";
import "./plugins/chartist";
import "./plugins/vee-validate";
import "./plugins/vue-world-map";
import notificate from "./plugins/notificate";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";

Vue.config.productionTip = false;

Vue.use(notificate, { store })

new Vue({
  router,
  store,
  vuetify,
  notificate,
  i18n,
  render: h => h(App)
}).$mount("#app");
