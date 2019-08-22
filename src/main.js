import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import EventBus from "./plugins/event-bus";
import msToMm from "./filters/ms-to-mm";
import Blur from "./directives/blur";
import routes from "./routes";

Vue.config.productionTip = false;
Vue.use(EventBus);
Vue.use(VueRouter);
Vue.use(msToMm);
Vue.use(Blur);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
