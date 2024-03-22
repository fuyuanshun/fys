//引入路由
import Router from 'vue-router'

//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'

export default new Router({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'message',
                    component: Message
                },
                {
                    path:'news',
                    component: News
                }
            ]
        }
    ]
})