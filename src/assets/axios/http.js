import axios from 'axios';
import { Toast } from 'vant';
import store from '@/store/index';
import qs from 'qs'; //引入qs模块
/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
    Toast({
        message: msg,
        duration: 1000,
        forbidClick: true
    });
}

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}

/**     
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 200001: 未登录状态，跳转登录页
        case 200001:
            toLogin();
            break;
            // 403 token过期
            // 清除token并跳转登录页
            // case 403:
            //     tip('登录过期，请重新登录');
            //     localStorage.removeItem('token');
            //     store.commit('loginSuccess', null);
            //     setTimeout(() => {
            //         toLogin();
            //     }, 1000);
            //     break;
            // // 404请求不存在
            // case 404:
            //     tip('请求的资源不存在');
            //     break;
        default:
            console.log(other);
    }
}

// 设置超时时间
axios.defaults.timeout = 1000 * 12;
// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断vuex中是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
        const token = store.state.token;
        token && (config.headers.token = token);
        return config;
    },
    error => {
        return Promise.error(error);
    })




//http response 拦截器
// axios.interceptors.response.use(
//     response => {
//        if (response.data.errCode == 200001) {
//             //可在此处添加弹框提示
//             router.push({
//                 path: "/login",
//                 querry: { redirect: router.currentRoute.fullPath } //从哪个页面跳转
//             })
//         }
//         return response;
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )



/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}


/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}