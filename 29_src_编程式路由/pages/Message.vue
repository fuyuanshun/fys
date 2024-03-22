<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <router-link :to="{
                    name:'detail',
                    path:'/home/message/detail',
                    query:{
                        id:m.id,
                        content:m.content
                    }
                }">
                {{ m.content }}
                </router-link>
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
            </li>
        </ul>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name : 'Message',
    data(){
        return {
            messageList : [
                {id:1, content:'message001'},
                {id:2, content:'message002'},
                {id:3, content:'message003'}
            ]
        }
    },
    methods:{
        pushShow(m){
            this.$router.push({
                name:'detail',
                params:{
                    id: m.id,
                    content: m.content
                }
            })
        },
        replaceShow(m){
            this.$router.replace({
                name:'detail',
                params:{
                    id: m.id,
                    content: m.content
                }
            })
        }
    }
}
</script>

<style>

</style>