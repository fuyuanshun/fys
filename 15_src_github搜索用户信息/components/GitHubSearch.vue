<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">搜索GitHub用户</h3>
      <div>
        <input type="text" placeholder="请输入要搜索的名字" v-model="keyWord" @keydown.enter="searchUser"/>&nbsp;<button  @click="searchUser">搜索</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    name : 'GitHubSearch',
    data(){
        return {
            'keyWord':'',
            isLoading:false,
            errMsg:''
        }
    },
    methods:{
        searchUser(){
            var searchUrl = `https://api.github.com/search/users?q=${this.keyWord}`
            this.$bus.$emit('updateListInfos',{userList:[], isLoading:true})
            axios.get(searchUrl).then(
                response => {
                    this.$bus.$emit('updateListInfos',{userList:response.data.items, isLoading:false})
                },
                error=>{
                    console.log(error.data)
                    this.$bus.$emit('updateListInfos',{userList:[], isLoading:false, errMsg:'网络错误，请稍后重试'})
                }
            )
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>

</style>