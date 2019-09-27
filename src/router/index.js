import Vue from 'vue'
import Router from 'vue-router'
import FormCreate from '@/components/FormCreate'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            redirect: '/',
            path: '/index',
        },
    ]
})
