import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import { globalMixin } from "./mixins/globalMixin";

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(store)
  .mixin(globalMixin)
  .use(router)
  .mount("#app");
