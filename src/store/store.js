import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist'
import getters from "./getters"
import mutations from './mutations'
import actions from './actions'

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
})

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    barColor: "rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)",
    barImage: "https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg",
    drawer: null,
    userInfo: null,
    snack: null,
    userList: null,
    categoryList: null,
    bookList: null,
    search: null
  },
  getters,
  mutations,
  actions
});
