import Vue from 'vue'
import Vuex from 'vuex'
import products from '../assets/products.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: products
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    headphones: (state) => state.products.headphones,
    speakers: (state) => state.products.speakers,
    earphones: (state) => state.products.earphones
  },
  modules: {
  }
})
