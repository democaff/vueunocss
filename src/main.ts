// 导入Vue及其相关库
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style.css";
// 导入样式
import "virtual:uno.css";

// 创建Pinia状态管理
const pinia = createPinia();

// 创建并挂载Vue应用
createApp(App).use(router).use(pinia).mount("#app");
