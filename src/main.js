import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
// ↓は使いたいアイコン
// bookmark(https://fontawesome.com/icons/bookmark?style=solid) を使いたい場合は faBookmark
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// FontAwesome Setup
library.add(faBookmark);
library.add(fas, far, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);
require("@/assets/sass/main.scss");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
