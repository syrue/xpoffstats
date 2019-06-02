import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$appName = 'XPOff Stats'
Vue.prototype.$appVersion = '1.1.0'
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  axios,
  data: {
    users: []
  },
  created() {
    var vm = this
    this.$http
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function(response) {
        vm.users = response.data
      })
  },
  render: h => h(App)
}).$mount('#app')
