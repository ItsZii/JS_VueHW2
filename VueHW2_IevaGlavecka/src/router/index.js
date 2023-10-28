import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
import AboutMeComponent from '../components/AboutMeComponent.vue';

const routes = [
  { path: '/', component: HomeComponent },
  {
    path: '/home',
    component: HomeComponent,
    meta: { requiresAuth: true },
  },
  {
    path: '/about-me',
    component: AboutMeComponent,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !useStore().user.loggedIn) {
    // Redirect to login page if not authenticated
    next('/');
  } else {
    next();
  }
});

export default router;
