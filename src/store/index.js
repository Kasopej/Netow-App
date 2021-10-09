import Vue from 'vue'
import Vuex from 'vuex'
import { services, offers, publications, ourStory, testimonials, teamData, siteHeroData, timelineData } from "@/shared/data.js";
import { postsData } from "@/shared/blog-data.js";

Vue.use(Vuex)

const state = { services: [], offers: [], publications: [], postsData: [], ourStory: [], testimonials: [], team: [], siteHeroes: [], timelines: [], };
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
  populateStorePostsData(state, data) {
    state.postsData = data;
  },
  populateStoreStoryData(state, data) {
    state.ourStory = data;
  },
  populateStoreTestimonialsData(state, data) {
    state.testimonials = data;
  },
  populateStoreTeamData(state, data) {
    state.team = data;
  },
  populateStoreSiteHeroData(state, data) {
    state.siteHeroes = data;
  },
  populateStoreTimelineData(state, data) {
    state.timelines = data;
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
  },
  fetchPublicationsData({ commit }) {
    const data = publications;
    commit('populateStorePublications', data);
  },
  fetchPostsData({ commit }) {
    const data = postsData;
    commit('populateStorePostsData', data)
  },
  fetchStoryData({ commit }) {
    const data = ourStory;
    commit('populateStoreStoryData', data)
  },
  fetchTestimonialsData({ commit }) {
    const data = testimonials;
    commit('populateStoreTestimonialsData', data);
  },
  fetchTeamData({ commit }) {
    const data = teamData;
    commit('populateStoreTeamData', data)
  },
  fetchSiteHeroes({ commit }) {
    const data = siteHeroData;
    commit('populateStoreSiteHeroData', data);
  },
  fetchTimelineData({ commit }) {
    const data = timelineData;
    commit('populateStoreTimelineData', data);
  }
};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
