import { createApp, Vue } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

// 外部组件

createApp(App).use(router).use(store).mount('#app')
