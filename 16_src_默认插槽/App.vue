<template>
    <div class="container">
        <Category title="美食">
            <img src="https://v2.cn.vuejs.org/images/logo.svg">
        </Category>
        <Category title="游戏">
          <ul>
            <li v-for="(game,index) in games" :key="index">{{ game }}</li>
        </ul>
        </Category>
        <Category title="电影">
          <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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