<template>
    <div class="schoolCss">
        <h3>学校名称：{{ name }}</h3>
        <h3>学校地址：{{ address }}</h3>
        <button @click="sendName">点我获取美女微信号</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name:'School',
    data(){
        return {'name':'清华大学', 'address':'北京'}
    },
    methods:{
        sendName(){
            this.$emit('cli', this.name)
        }
    },
    mounted(){
        pubsub.subscribe('hello', function(){
            console.log("hello")
        })
    }
}
</script>

<style scoped>
    .schoolCss{
        background-color: aqua;
        padding: 5px;
    }
</style>