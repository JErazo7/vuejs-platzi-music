import Vue from "vue";
import App from "./App.vue";
import child from "./components/child.vue";

Vue.config.productionTip = false;
Vue.component("child", child);

new Vue({
  render: h => h(App)
}).$mount("#app");
