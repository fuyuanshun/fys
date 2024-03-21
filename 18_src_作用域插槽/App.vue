<template>
    <div class="container">

        <Category title="游戏">
          <template slot-scope="{games}">
            <ul>
              <li v-for="(game,index) in games" :key="index">{{ game }}</li>
            </ul>
          </template>
          
        </Category>
    </div>
</template>

<script>

import Category from './components/Category.vue'

export default {
    // 注册组件
    components:{
      Category
    }
}
</script>

<style>
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>