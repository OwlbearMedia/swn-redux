import Vue from 'vue';
import Router from 'vue-router';
import Sector from '@/components/sector';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/sector',
      name: 'Sector',
      component: Sector,
    },
  ],
});
