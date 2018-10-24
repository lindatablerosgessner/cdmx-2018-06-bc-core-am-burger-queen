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
  uri: 'http://localhost:5000/graphql'
})

const apolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false;

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
