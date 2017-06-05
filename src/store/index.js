import Vue from 'vue';
import Vuex from 'vuex';
import DataManager from './data-manager';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sector: {},
  },
  mutations: {
    addSector(state, sector) {
      Vue.set(state, 'sector', sector);
    },
  },
  actions: {
    getSector(context) {
      DataManager.getSector().then(sector => context.commit('addSector', sector));
    },
  },
});
