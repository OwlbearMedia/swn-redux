import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sector: {},
    selectedSystem: {},
  },
  mutations: {
    addSector(state, sector) {
      Vue.set(state, 'sector', sector);
    },
    selectSystem(state, system) {
      Vue.set(state, 'selectedSystem', system);
    },
  },
  actions: {
    getSector(context) {
      Api.getSector().then(sector => context.commit('addSector', sector));
    },
  },
});
