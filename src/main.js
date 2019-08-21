import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import EventBus from "./plugins/event-bus";
import msToMm from "./filters/ms-to-mm";
import routes from "./routes";

Vue.config.productionTip = false;
Vue.use(EventBus);
Vue.use(VueRouter);
Vue.use(msToMm);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
