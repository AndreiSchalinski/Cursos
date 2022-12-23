import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'

//registrando o plugin dentro do projeto Vue
Vue.use(Router)

//para exportar configurações do Router para o projeto
export default new Router({

    //configurar por onde a requisição passará para pegar o componente, se tiver com # hash, somente o navegador conhece essa url, mas no servido não.
    mode:'history',
    //rotas configuradas
    routes: [{
        path: '/',
        component: Inicio
    }, {
        //path: '/usuario', //forma convencional de definir uma url
        path: '/usuario', //forma personalizada, amarrando uma informação que a url precisa receber ir a determinada direção
        component: Usuario,
        props:true, //isso significa que todos os parametros especificados serão passados nesta rota, ao componente especificado aqui, neste caso, vai para Usuario
        children:[
            {
                path:'',component:UsuarioLista
            },
            {
                path:':id', component:UsuarioDetalhe, props: true
            },
            {
                path:':id/editar', component:UsuarioEditar, props: true, name:'editarUsuario'
            }
        ]
    },{
        path: '/redirecionar',//para fazer redirecionamentos
        redirect: '/usuario'
    },{
        path:'*',//qualquer url fora de contexto do sistema fará com que o router retorne para o início, de acordo com essa regra  criada
        redirect:'/'
    }]

})