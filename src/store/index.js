import Vue from 'vue'
import Vuex from 'vuex'
import { services, offers } from "@/shared/data.js";

Vue.use(Vuex)

const state = { services: [], offers: [], };
const mutations = {
  populateStoreServices(state, data) {
    state.services = data;
  },
  populateStoreOffers(state, data) {
    state.offers = data;
  }
};
const actions = {
  fetchServicesData({ commit }) {
    const data = services;
    commit('populateStoreServices', data);
  },
  fetchOffersData({ commit }) {
    const data = offers;
    commit('populateStoreOffers', data)
  }
};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
