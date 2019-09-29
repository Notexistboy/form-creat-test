import Vue from 'vue'
import Router from 'vue-router'
import FormCreate from '@/components/FormCreate'
import index from '@/components/index'
import input from '@/components/addCom/input'

Vue.use(Router)

export default new Router({
    routes: [
        {
            redirect: '/',
            path: '/index',
        },
        {
            path: '/',
            name: 'index',
            component: index,
            children: [
                {
                    path: '/index/Input',
                    name: 'input',
                    component: input,
                },
            ]
        },
        
    ]
})
