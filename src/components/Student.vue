<template>
    <div class="StudentCss">
        <h3>学生名称：{{ name }}</h3>
        <h3>性别：{{ sex }}</h3>
        <button @click="sendStudentName">点我获取帅哥微信号</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name:'Student',
    data(){
        return {'name':'付元顺', sex:'帅哥'}
    },
    methods:{
        sendStudentName(){
            this.$emit('cli', this.name)
            pubsub.publish('hello', this.name);
        }
    }
}
</script>

<style type="less" scoped>
    .StudentCss{
        background-color: pink;
        padding: 5px;
        margin-top : 30px;
    }
</style>