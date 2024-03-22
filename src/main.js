import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router/index.js'

Vue.use(Router)

new Vue({
    el:"#root",
    router,
    render: h=> h(App)
})