import Vue from 'vue'
import Vuex from 'vuex'

//应用插件
Vue.use(Vuex)

const actions = {
    add(context,v){
        context.commit('ADD', v);
    },
    division(context,v){
        context.commit('DIVISION', v)
    }
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
    },
    DIVISION(state,v){
        state.s =  state.s  / v;
    },
    ADD_PERSON(state,v){
        state.personList.unshift(v)
    }
}

const state = {
    s : 0,
    school:'清华大学',
    subject:'计算机技术',
    personList:[
        {"name":"fys"}
    ]
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
