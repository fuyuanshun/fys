import Vue from 'vue'
import App from './App.vue'

new Vue({
    el:"#root",
    render: h=> h(App),
    beforeCreate(){
        Vue.prototype.$bus = this;
    }
})