import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

sync(store, router);

Vue.config.devtools = true;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
