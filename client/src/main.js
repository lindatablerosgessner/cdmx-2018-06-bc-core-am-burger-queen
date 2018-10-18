import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo);

export const defaultClient = new ApolloClient({
  // uri: "https://easy-burger-queen-qpbxhwnumr.now.sh/graphql"
  uri: "https://localhost:4000"
})
const ApolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false

new Vue({
  provide: ApolloProvider.provide(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
