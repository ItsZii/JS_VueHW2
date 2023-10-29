import { createRouter, createWebHistory } from 'vue-router'
import LandingComponent from '@/components/LandingComponent.vue';;
import HomeComponent from '@/components/HomeComponent.vue';
import AboutMeComponent from '@/components/AboutMeComponent.vue';
import SongListComponent from '@/components/SongListComponent.vue';
import SongFilterComponent from '@/components/SongFilterComponent.vue';
import FormComponent from '@/components/FormComponent.vue';
import { useStore } from '../store/globalStore.js';



const isAuthenticated = () => useStore().user.isLoggedIn;

const routes = [
  { path: '/', component: LandingComponent },
  {
    path: '/home',
    component: HomeComponent,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        components: {
          default: SongFilterComponent,
          helper: SongListComponent
        },
      },
    ],
  },
  {
    path: '/about-me',
    component: AboutMeComponent,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        components: {
          default: FormComponent,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (isAuthenticated()) {
      // User is authenticated, proceed to the next route
      next();
    } else {
      // User is not authenticated, redirect to login or landing page
      next('/');
    }
  } else {
    // Routes that do not require authentication, proceed to the next route
    next();
  }
});


export default router;
