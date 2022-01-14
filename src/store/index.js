import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

// Modules
import auth from "./modules/auth";

Vue.use(Vuex)

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export default new Vuex.Store({
  modules: {
    auth: auth
  },
  plugins: [new VuexPersist({
    // storage: window.localStorage,
    modules: ['auth']
  }).plugin]
})
