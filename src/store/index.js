import Vue from 'vue'
import Vuex from 'vuex'
import Storage from '../assets/utils/localStorage.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 5, //总数：5
        token: 'asd',
    },
    mutations: {
        getParam(state, value) {
            state.count += value
        },
    },
    actions: {
        getParamSync(context, value) {
            context.commit('getParam', value)
        },
    },
    modules: {}
})