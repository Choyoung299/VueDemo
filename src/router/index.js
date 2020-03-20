import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/Register',
        name: 'Register',
        component: () =>
            import ('../views/Register.vue')
    },
    {
        path: '/VipProtocol',
        name: 'VipProtocol',
        component: () =>
            import ('../views/VipProtocol.vue')
    },
    {
        path: '/Set',
        name: 'Set',
        component: () =>
            import ('../views/set/Set.vue')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history' //去除路由地址中的#
})

export default router