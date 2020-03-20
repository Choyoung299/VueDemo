import base from './baseUrl'; // 导入接口域名列表
import axios from './http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const api = {
    // 获取金价
    getGoldPrice() {
        return axios.get(base.CURRENTPRICE);
    },

    // post提交    
    login(params) {
        return axios.post(base.LOGIN, params);
    },

    //获取会员服务协议
    getVipProtocol() {
        return axios.get(base.USERPROTOCOL)
    }
}

export default api;