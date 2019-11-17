import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入清除样式CSS
import '@/reset.css'
import '@/common.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')