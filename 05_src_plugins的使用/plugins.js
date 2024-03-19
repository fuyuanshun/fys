export default {
    install(Vue){
        //全局过滤器
        Vue.filter('sl',function(val){
            return val.slice(0,4)
        })

        //全局指令 v-fys
        Vue.directive('fys', {
            bind(element, binding){
                console.info("bind")
            },
            inserted(element, binding){
                console.info("inserted")
            },
            updated(element, binding){
                console.info("updated")
            }
        })

        //全局混入
        // Vue.mixin({
        //     mounted(){
        //     }
        // })
    }
}