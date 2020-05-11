import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

import "bootstrap/js/dist/tooltip";

$(function() {
  $('[data-toggle="popover"]').popover();
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
