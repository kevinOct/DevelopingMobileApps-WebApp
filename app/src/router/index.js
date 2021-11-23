import { createRouter,createWebHistory } from 'vue-router'
import Overview from '../views/Overview'
import Profile from '../views/Profile.vue'

const routes = [
{
     path: '/',
    name: 'Start',
    component: Overview,
  },
  {
     path: '/Overview',
    name: 'Overview',
    component: Overview,
  },
  {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      props: true
    }
];

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
