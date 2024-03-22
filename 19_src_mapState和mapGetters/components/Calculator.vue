<template>
    <div class="cal">
        <h1>总和为：{{ s }}</h1>
        <h1>10倍：{{ bigSum }}</h1>
        <h1>我在{{ school }} 学习 {{ subject }}</h1>
        <select v-model="v">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="minus">-</button>
        <button @click="ride">x</button>
        <button @click="division">÷</button>
    </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
    name:'Calculator',
    data(){
        return{
            v:1
        }
    },
    methods: {
        add(){
            console.log(this.$store)
           this.$store.dispatch('add', this.v);
        },
        minus(){
            this.$store.commit('MINUS', this.v);
        },
        ride(){
            this.$store.commit('RIDE', this.v);
        },
        division(){
            this.$store.dispatch('division', this.v);
        }
    },
    computed:{
        //对象写法
        // ...mapState({'s':'s', 'school':'school', 'subject':'subject'}),
        // ...mapGetters({'bigSum':'bigSum'})

        //数组写法
        ...mapState(['s', 'school', 'subject']),
        ...mapGetters(['bigSum'])
    }
}
</script>

<style>
    .cla{
        align-content: center;
    }
</style>