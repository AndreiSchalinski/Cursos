import Vue from 'vue'
import axios from 'axios'

//está implementado para acessar de forma global no projeto
                         
axios.defaults.baseURL = 'https://curso-vue-44d3d-default-rtdb.firebaseio.com/'

//para configurar o header das requisições no axios, quando necessário
//axios.defaults.headers.common['Authorization'] = 'abc123'
//axios.defaults.headers.get['Accepts'] = 'application/json'

//tem uma outra forma para configurar também

Vue.use({
    install(Vue){
        //Vue.prototype.$http = axios //para colocar http dentro da instância do Vue
        //outra forma de configurar uma conexão, por meio de uma nova instância
        Vue.prototype.$http = axios.create({
            baseURL:'https://curso-vue-44d3d-default-rtdb.firebaseio.com/',
            //segunda forma de configurar o header da requisição
            headers:{
                get:{
                    "Authorization":"abc123"
                }
            }
        })

        //para fazer interceptações nas REQUIÇÕES feitas ao banco via http
        Vue.prototype.$http.interceptors.request.use(config => {
            
            return config
        }, error => Promise.reject(error))

        //para interceptar NAS RESPONSES substituindo o tipo de resposta
        Vue.prototype.$http.interceptors.response.use(resp => {

            const array = []

            for (const chave in resp.data) {
               array.push({id: chave, ...resp.data[chave]})
            }

            //resp.data = array             para retornar já como array

            return resp

        }, error => Promise.reject(error))



    }
})