import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { createI18n } from "vue-i18n";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vue3TouchEvents from "vue3-touch-events";

library.add(fas);
library.add(fab);

const i18n = createI18n({
  locale: (function() {
    const lang = navigator.language.split("-")[0];
    if (lang != "ja") {
      return "en";
    }
    return lang;
  }()), // set locale
  messages: {
    ja: require("./languages/ja.json"),
    en: require("./languages/en.json")
  }
});

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(i18n)
  .use(vue3TouchEvents)
  .mount("#app");
