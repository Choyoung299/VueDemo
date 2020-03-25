import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './assets/axios/api' // 导入api接口
import { Toast } from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import './assets/style/common.css' //引入通用样式

Vue.config.productionTip = false
Vue.prototype.$api = api // 将api挂载到vue的原型上
Vue.prototype.Toast = Toast

// 将所有 Toast 的展示时长设置为 800 毫秒
Toast.setDefaultOptions({ duration: 800 });

// 将所有 loading Toast 设置为背景不可点击 (2.2.10 版本开始支持)
Toast.setDefaultOptions('loading', { forbidClick: true });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')