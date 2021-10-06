import Vue from 'vue'
import Vuex from 'vuex'
import { services, offers, publications } from "@/shared/data.js";

Vue.use(Vuex)

const state = { services: [], offers: [], publications: [], };
const mutations = {
  populateStoreServices(state, data) {
    state.services = data;
  },
  populateStoreOffers(state, data) {
    state.offers = data;
  },
  populateStorePublications(state, data) {
    state.publications = data;
  },
};
const actions = {
  fetchServicesData({ commit }) {
    const data = services;
    commit('populateStoreServices', data);
  },
  fetchOffersData({ commit }) {
    const data = offers;
    commit('populateStoreOffers', data)
  },
  fetchPublicationsData({ commit }) {
    const data = publications;
    commit('populateStorePublications', data);
  }
};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
