import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../api';

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
      Api.getSector().then(sector => context.commit('addSector', sector));
    },
  },
});
