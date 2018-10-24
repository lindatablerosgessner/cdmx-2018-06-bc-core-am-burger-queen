import Vue from 'vue'
import Vuex from 'vuex'
import { defaultClient as apolloClient } from "./main";
import { SIGNIN_USER } from "./queries"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
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
    }
  }
});
