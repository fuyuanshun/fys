<template>
    <div class="row">
      <div v-show="info.userList.length" class="card" v-for="user in info.userList" :key="user.id">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
      <!-- 展示加载中 -->
      <h1 v-show="info.isLoading">加载中</h1>
      <!-- 展示错误信息 -->
      <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
    </div>  
</template>

<script>
export default {
    name : 'GitHubList',
    data(){
        return {
            info:{
                userList: [],
                isLoading: false,
                errMsg:''
            }
        }
    },
    methods:{
        updateListInfos(obj){
            this.info = {...this.info, ...obj}
        }
    },
    mounted(){
        this.$bus.$on('updateListInfos', this.updateListInfos)
    }
}
</script>

<style scoped>

</style>