import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.css'
import 'assets/icon/index.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import globalFilter from 'utils/globalFilter'

const app = createApp(App);
app.config.globalProperties.$filters = globalFilter

app.use(Vant);
app.use(store)
app.use(router)
app.mount('#app')