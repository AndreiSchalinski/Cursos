import './style.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  //configurado o Rounter para dentro da intância do Vue
  router,
  render: h => h(App),
}).$mount('#app')
