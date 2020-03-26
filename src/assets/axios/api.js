import base from './baseUrl'; // 导入接口域名列表
import {get, post } from './http'; // 导入http中创建的axios实例


const api = {
    // 获取金价
    getGoldPrice() {
        return get(base.CURRENTPRICE);
    },

    // 登录  
    login(params) {
        return post(base.LOGIN, params);
    },

    //获取会员服务协议
    getVipProtocol() {
        return get(base.USERPROTOCOL);
    },

    //获取用户个人信息
    getUserInfo(params) {
        return post(base.GETUSERINFO, params);
    }
}

export default api;