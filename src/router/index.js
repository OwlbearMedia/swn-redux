import Vue from 'vue';
import Router from 'vue-router';
import SystemOverview from '@/components/system-overview';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
    }, {
      path: '/system-overview/:id',
      name: 'SystemOverview',
      component: SystemOverview,
      props: true,
    },
  ],
});
