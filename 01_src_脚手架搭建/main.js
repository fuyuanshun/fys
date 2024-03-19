import Vue from 'vue'
import App from './App.vue'

new Vue({
    el:'#root',
    // components:{
    //     App
    // },
    // render:function(element){
    //     return element('App', App)
    // }
    render: h => h(App)
})