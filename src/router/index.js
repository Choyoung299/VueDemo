import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  { //登录页
    path: '/Login',
    name: 'Login',
    component: () =>
      import('../views/Login.vue')
  },
  { //注册页
    path: '/Register',
    name: 'Register',
    component: () =>
      import('../views/Register.vue')
  },
  { //会员协议
    path: '/VipProtocol',
    name: 'VipProtocol',
    component: () =>
      import('../views/VipProtocol.vue')
  },
  { //设置主页
    path: '/Set',
    name: 'Set',
    component: () =>
      import('../views/set/Set.vue')
  },
  { //地址管理
    path: '/AddressManage',
    name: 'AddressManage',
    component: () =>
      import('../views/set/AddressManage.vue')
  },
  { //新增地址
    path: '/AddAddress',
    name: 'AddAddress',
    component: () =>
      import('../views/set/AddAddress.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history' //去除路由地址中的#
})

export default router
