import { createRouter,createWebHistory } from 'vue-router'
import Overview from '../views/Overview'

const routes = [
  {
     path: '/Overview',
    name: 'Overview',
    component: Overview,
  }
];

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
