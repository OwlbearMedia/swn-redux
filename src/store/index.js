import Vue from 'vue';
import Vuex from 'vuex';
import DataManager from './data-manager';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    sector: {},
    spacebook: {},
    isLoggedIn: false,
    systemHovered: null,
  },
  mutations: {
    updateUser(state, user) {
      Vue.set(state, 'user', user);
      Vue.set(state, 'isLoggedIn', true);
    },
    updateSector(state, sector) {
      Vue.set(state, 'sector', sector);
    },
    setSystemHovered(state, system) {
      Vue.set(state, 'systemHovered', system);
    },
    updateSpacebook(state, spacebook) {
      Vue.set(state, 'spacebook', spacebook);
    },
  },
  actions: {
    getSector(context) {
      DataManager.getSector().then(sector => context.commit('updateSector', sector));
    },
    updateSector(context, data) {
      DataManager.updateSector(data).then(() => context.commit('updateSector', data));
    },
    getSpacebook(context) {
      DataManager.getSpacebook().then(spacebook => context.commit('updateSpacebook', spacebook));
    },
    authenticate(context, data) {
      DataManager.authenticate(data).then(user => context.commit('updateUser', user));
    },
  },
});
