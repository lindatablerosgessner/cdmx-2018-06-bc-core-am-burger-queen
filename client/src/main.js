import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
// Here we are going to stablish the connection between ApolloClient and ApolloBack
Vue.use(VueApollo);

export const defaultClient = new ApolloClient({
  uri: 'https://easy-burger-queen-misnddiamo.now.sh/graphql',
  // uri: 'http://localhost:5000/graphql',
  fetchOptions: {
    credentials: "include"
  },
  request: operation => {
    if (!localStorage.token) {
      localStorage.setItem("token", "");
    }
    operation.setContext({
      headers: {
        authorization: localStorage.setItem("token", "")
      }
    }); 
  },
  onError: ({ graphQlErrors, networkError }) => {
    if(networkError){
      console.log("networkError", networkError);
    }
    if (graphQlErrors) {
      for (let err of graphQlErrors) {
        console.log(err);
      }
    }
  }
});

const apolloProvider = new VueApollo({ defaultClient });
Vue.config.productionTip = false;

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
