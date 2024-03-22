import Vue from 'vue'
import Vuex from 'vuex'

//应用插件
Vue.use(Vuex)

const actions = {
    add(context,v){
        context.commit('ADD', v);
    },
    minus(context,v){
        context.commit('MINUS', v);
    },
    ride(context,v){
        context.commit('RIDE', v);
    },
}

const mutations = {
    ADD(state, v){
        state.s += v;
    },
    MINUS(state, v){
        state.s -= v;
    },
    RIDE(state, v){
        state.s =  state.s * v;
    }
}

const state = {
    s : 0,
    school:'清华大学',
    subject:'计算机技术'
}

const getters = {
    bigSum(state){
        return state.s * 10;
    }
}

//导出
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
