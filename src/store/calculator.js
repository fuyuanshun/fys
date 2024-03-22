export default {
    namespaced:true,
    actions : {
        add(context,v){
            context.commit('ADD', v);
        },
        division(context,v){
            context.commit('DIVISION', v)
        }
    },
    mutations:{
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
        }
    },
    state:{
        s : 0,
        school:'清华大学',
        subject:'计算机技术'
    },
    getters:{
        bigSum(state){
            return state.s * 10;
        }
    }
}