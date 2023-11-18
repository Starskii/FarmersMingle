import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App).use(router, VueApexCharts);

app.mount("#app");
