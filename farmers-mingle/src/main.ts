import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import VueChartkick from 'vue-chartkick';
import 'chartkick/chart.js'

const app = createApp(App).use(router);
app.use(VueChartkick);

app.mount("#app");
