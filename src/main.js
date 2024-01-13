import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import axios from "@/pludge/axios";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

axios.defaults.baseURL="http://localhost:8999"

const app = createApp(App);
app.use(router)
    .use(ElementPlus)
    .mount('#app')
app.config.globalProperties.$http = axios
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

