import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//diretiva criada por meio da função directive
Vue.directive('destaque', {

	bind(el, binding, vnode){
		el.style.backgroundColor = 'lightgreen'
	}

})

Vue.directive('destaque-2', {

	bind(el, binding, vnode){
		el.style.backgroundColor = binding.value
	}

})

//diretiva com parametro sendo passada para validar se o parametro em fundo ou não
Vue.directive('destaque-3', {

	bind(el, binding, vnode){
		if (binding.arg === 'fundo') {
			el.style.backgroundColor = binding.value
		} else {
			el.style.color = binding.value
		}
	}

})

Vue.directive('destaque-4', {

	bind(el, binding, vnode){
		if (binding.modifiers['azul']) {
			el.style.backgroundColor = 'blue'
		} else if(binding.modifiers['vermelho']) {
			el.style.backgroundColor = 'red'
		}
	}

})


new Vue({
	render: h => h(App),
}).$mount('#app')
