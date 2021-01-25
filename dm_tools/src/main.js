import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// globals
import Container from "./components/Flex/Container";
import Layout from "./components/Flex/Layout";
import Flex from "./components/Flex/Flex";

createApp(App)
  .use(store)
  .use(router)
  .component("container", Container)
  .component("layout", Layout)
  .component("flex", Flex)
  .mount("#app");
