<template>
    <div class="cal">
        <h1>总和为：{{ s }}</h1>
        <h1>10倍：{{ bigSum }}</h1>
        <h1>我在{{ school }} 学习 {{ subject }}</h1>
        <h1>下方组件总人数是：{{ personList.length }}</h1>
        <select v-model="v">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="add(v)">+</button>
        <button @click="minus(v)">-</button>
        <button @click="ride(v)">x</button>
        <button @click="division(v)">÷</button>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'

export default {
    name:'Calculator',
    data(){
        return{
            v:1
        }
    },
    methods: {
        ...mapActions({add:'add', division:'division'}),
        ...mapMutations({minus:'MINUS', ride:'RIDE'})
    },
    computed:{
        //对象写法
        ...mapState(['s', 'school', 'subject', 'personList']),
        ...mapGetters(['bigSum'])
    }
}
</script>

<style>
    .cla{
        align-content: center;
    }
</style>