import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Sector from '@/components/sector';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/sector',
      name: 'Sector',
      component: Sector,
    },
  ],
});
