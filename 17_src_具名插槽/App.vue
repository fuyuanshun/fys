<template>
    <div class="container">
        <Category title="美食">
            <img src="https://v2.cn.vuejs.org/images/logo.svg" slot="s">
            <a href="http://www.baidu.com" slot="s1">查看更多</a>
        </Category>
        <Category title="游戏">
          <ul slot="s">
            <li v-for="(game,index) in games" :key="index">{{ game }}</li>
          </ul>
          <template slot="s1">
            <a href="http://www.baidu.com">单机游戏</a>
            <a href="http://www.baidu.com">网络游戏</a>
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
    },
    data(){
      return {
        foods:['火锅', '烧烤', '牛排', '家常菜', '烤鱼'],
        games:['博德之门3', '恶魔之魂重制版', '帕鲁', '塞尔达传说', '黑暗之魂'],
        films:['《教父》', '《整蛊专家》', '《新警察故事》', '《无间道》']
      }
    }
}
</script>

<style>
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>