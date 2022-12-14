import Vue from 'vue'
import App from './App.vue'
import Contador from './Contador.vue'
import ContadorDeSoma from './ContadorDeSoma.vue'
import ContadordeSubtrair from './ContadordeSubtrair.vue'

Vue.config.productionTip = false

Vue.component('app-contador', Contador)

Vue.component('app-contador-soma', ContadorDeSoma)

Vue.component('app-contador-subtrair', ContadordeSubtrair)

new Vue({
  render: h => h(App),
}).$mount('#app')
