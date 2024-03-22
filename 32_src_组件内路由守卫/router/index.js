//引入路由
import Router from 'vue-router'

//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

const router = new Router({
    routes:[
        {
            name: 'about',
            path:'/about',
            component:About,
            meta:{
                title:'关于',
                isAuth:true
            },
            //独享前置路由守卫。（没有后置哦）
            // beforeEnter:(to, from, next)=>{
            //     if(!to.meta.isAuth){
            //         next();
            //     } else {
            //         if(localStorage.getItem("name") === 'fys'){
            //             next();
            //         } else {
            //             alert("无权限")
            //         }
            //     }
            // }
        },
        {
            name: 'home',
            path:'/home',
            component:Home,
            meta:{
                title:'主页'
            },
            children:[
                {
                    name: 'message',
                    path:'message',
                    component: Message,
                    meta:{
                        isAuth:true,
                        title:'消息'
                    },
                    children:[
                        {
                            name:'detail',
                            path:'detail',
                            component:Detail,
                            meta:{
                                title:'详情'
                            },
                            props($route){
                                return{
                                    id: $route.query.id,
                                    content: $route.query.content
                                }
                            }
                        }
                    ]
                },
                {
                    name: 'news',
                    path:'news',
                    component: News,
                    meta:{
                        isAuth: true,
                        title:'新闻'
                    }
                }
            ]
        }
    ]
})

export default router;

//全局前置路由守卫
// router.beforeEach((to, from, next)=>{
//     if(!to.meta.isAuth){
//         next();
//     } else {
//         if(localStorage.getItem("name") === 'fys'){
//             next();
//         } else {
//             alert("无权限")
//         }
//     }
// })

//全局后置路由守卫
// router.afterEach((to, from)=>{
//    document.title = to.meta.title;
// })