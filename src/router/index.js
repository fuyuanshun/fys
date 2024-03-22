//引入路由
import Router from 'vue-router'

//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

export default new Router({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})