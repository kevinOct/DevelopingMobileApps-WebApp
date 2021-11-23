import { createRouter,createWebHistory } from 'vue-router'
import Overview from '../views/Overview'
import Profile from '../views/Profile.vue'
import signUp from '../views/SignUp'
import LogIn from '../views/LogIn'
import welcomePage from '../views/welcomePage'


const routes = [
{
     path: '/',
    name: 'welcomePage',
    component: welcomePage,
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
   },
   {
    path: '/login',
    name: 'LogIn',
    component: LogIn,
  },
  {
    path: '/signup',
    name: 'signup',
    component: signUp,
  },
];

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
