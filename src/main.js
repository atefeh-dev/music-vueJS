import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import veeValidatePlugin from "./inclouds/validation";
import { auth } from "./inclouds/firebase";

import "./assets/base.css";
import "./assets/main.css";
let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(veeValidatePlugin, { foo: 100 });

    app.mount("#app");
  }
});
