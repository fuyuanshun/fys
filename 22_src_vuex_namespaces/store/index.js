import Vue from 'vue'
import Vuex from 'vuex'

//应用插件
Vue.use(Vuex)

import calculatorOptions from './calculator.js'
import personOptions from './person.js'

//导出
export default new Vuex.Store({
    modules:{
        calculatorOptions,
        personOptions
    }
})
