import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useStore } from './store/globalStore.js';
import LandingComponent from './components/LandingComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import NavComponent from './components/NavComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import SongListComponent from './components/SongListComponent.vue'
import SongFilterComponent from './components/SongFilterComponent.vue'
import AboutMeComponent from './components/AboutMeComponent.vue'
import FormComponent from './components/FormComponent.vue'

const routes = [
  { path: '/', component: LandingComponent },
  { path: '/home', component: HomeComponent, meta: { requiresAuth: true } },
  { path: '/about-me', component: AboutMeComponent, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App);
app.use(createPinia()).use(router);

app.mount('#app')

app.provide('store', useStore());

