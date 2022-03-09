import { createApp } from 'vue'
import '/@/styles/index.scss' // global css
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import other from '/@/utils/other';
import 'mars3d/dist/mars3d.css'
import { store, key } from './store';
// custom svg图标
import 'virtual:svg-icons-register'
import customsvgIcon from '/@/components/custmosvgIcon/index.vue'

const app = createApp(App);
other.elSvg(app);

app.component('customsvgicon', customsvgIcon)
app.use(store, key).
use(ElementPlus).
use(router).
mount('#app')