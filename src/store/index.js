import Vue from 'vue';
import Vuex from 'vuex';
import DataManager from './data-manager';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    sector: {},
  },
  mutations: {
    updateUser(state, user) {
      Vue.set(state, 'user', user);
    },
    updateSector(state, sector) {
      Vue.set(state, 'sector', sector);
    },
  },
  actions: {
    getSector(context) {
      DataManager.getSector().then(sector => context.commit('updateSector', sector));
    },
    updateSector(context, data) {
      DataManager.updateSector(data).then(() => context.commit('updateSector', data));
    },
    authenticate(context, data) {
      DataManager.authenticate(data).then(user => context.commit('updateUser', user));
    },
  },
});
