import Vue from 'vue';
import Router from 'vue-router';
import SystemOverview from '@/components/system-overview';
import Spacebook from '@/components/spacebook';
import Login from '@/components/log-in';

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
    }, {
      path: '/log-in',
      name: 'Login',
      component: Login,
    }, {
      path: '/spacebook',
      name: 'Spacebook',
      component: Spacebook,
    },
  ],
});
