import { createRouter,createWebHistory } from 'vue-router'
import Home from '../views/Home'
import ViewProduct from '../views/ViewProduct'
import AddEditProduct from '../views/AddEditProduct'

const routes = [
  {
     path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },

  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  }, 
  {
    path: '/Welcome',
    name: 'Welcome',
    component: Welcome,
    props:true
  },

  {
    path: '/Overview',
    name: 'Overview',
    component: Overview,
    props: true
  }, 
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    props:true
  },

  {
    path: '/Chat',
    name: 'Chat',
    component: Chat,
    props: true
  }, 
];

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
