import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import EventBus from "./plugins/event-bus";
import routes from "./routes";

Vue.config.productionTip = false;
Vue.use(EventBus);
Vue.use(VueRouter);

const router = new VueRouter({ routes });

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
