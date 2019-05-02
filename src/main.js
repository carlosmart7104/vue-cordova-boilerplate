import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let app = new Vue({
  router,
  store,
  render: h => h(App)
})

document.addEventListener('deviceready', function () {
  console.log('onDeviceReady')
  app.$mount('#app')
});
