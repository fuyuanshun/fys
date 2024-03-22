export default {
    namespaced:true,
    actions : {
        addWang(context, v){
            if(v.name.indexOf('王') === 0){
                context.commit('ADD_WANG',v)
            } else {
                alert("必须是姓王的人")
            }
        }
    },
    mutations:{
        ADD_PERSON(state,v){
            state.personList.unshift(v)
        },
        ADD_WANG(state, v){
            state.personList.unshift(v)
        }
    },
    state:{
        personList:[
            {"name":"fys"}
        ]
    },
    getters:{
        firstPersonName(state){
            // console.log(state.personList)
            if(state.personList.length > 0){
                return state.personList[0].name
            } else {
                return '列表为空'
            }
        }
    }
}