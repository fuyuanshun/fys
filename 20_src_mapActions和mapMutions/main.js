import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'


// import VueResource from 'vue-resource';
// Vue.use(VueResource)

new Vue({
    el:"#root",
    store,
    render: h=> h(App)
    //全局事件总线
    // beforeCreate(){
        // Vue.prototype.$bus = this;
    // }
})