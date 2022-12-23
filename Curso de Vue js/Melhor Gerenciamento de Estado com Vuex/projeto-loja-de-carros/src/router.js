import Vue from 'vue'
import Router from 'vue-router'

import MainContent from './view/MainContent'

import ViewUser from './view/ViewUser.vue'
import ViewNewUser from './view/ViewNewUser'
import ViewListUser from './view/ViewListUser'

import ViewVeiculo from './view/ViewVeiculo.vue'
import ViewNewVeiculo from './view/ViewNewVeiculo'
import ViewListVeiculo from './view/ViewListVeiculo'


Vue.use(Router)

export default new Router({

    mode: 'history',
    routes: [{
        path: '/',
        component: MainContent
    }, {
        path: '/veiculo',
        component: ViewVeiculo,
        children: [
            {
                path: '/veiculo/cadastrar', component: ViewNewVeiculo
            },
            {
                path: '/veiculo/listar', component: ViewListVeiculo,
            }
        ]
    }, {
        path: '/usuario',
        component: ViewUser,
        children: [
            {
                path: '/usuario/cadastrar', component: ViewNewUser
            },
            {
                path: '/usuario/listar', component: ViewListUser,
            }
        ]
    }]

})

