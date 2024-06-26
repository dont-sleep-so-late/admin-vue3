import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";

// ****** ↓↓↓ ant-design ↓↓↓ ******
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "ant-design-vue";

// pinia
import { createPinia } from "pinia";
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(Antd);
app.use(pinia);

app.mount("#app");
