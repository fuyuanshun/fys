import Vue from 'vue'
import App from './App.vue'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import {Button} from 'element-ui'
Vue.use(Button)

new Vue({
    el:"#root",
    render: h=> h(App)
})