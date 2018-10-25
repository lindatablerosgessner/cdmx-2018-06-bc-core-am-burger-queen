import Vue from 'vue'
import Vuex from 'vuex'
import { defaultClient as apolloClient } from "./main";
import { SIGNIN_USER, GET_FOOD_LIST } from "./queries"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    food: []
  },
  mutations: {
    setFood: (state, payload) => {
      state.food = payload;
    }
  },
  actions: {
    // aca se usa el querie de queries.js
    // payload son las variables que traiga de tu componente
    signInUser: ({ commit }, payload) => {
      apolloClient.mutate({
        mutations: SIGNIN_USER,
        variables: payload
      })
      .then(({ data }) => {
        localStorage.setItem("token", data.signInUser.token);
      })
      .catch(error => {
        console.log(error);
      });
    },
    getFood: ({ commit }) => {
      // commit("setLoading", true);
      apolloClient
        .query({
          query: GET_FOOD_LIST
        })
        .then(({ data }) => {
          commit("setFood", data.getFloodList);
        })
        .catch(err => {
          console.error(err)
        });
    }
  },
  getters: {
    food: state => state.food
  }
});
