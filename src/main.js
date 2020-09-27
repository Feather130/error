import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import myLib from './index'

Vue.use(myLib)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
