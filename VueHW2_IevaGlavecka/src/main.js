import { createApp } from 'vue'
import router from './router/index.js';
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App);
// Use Pinia for state management
const pinia = createPinia();
app.use(pinia);

// Use the router
app.use(router);

app.mount('#app');
