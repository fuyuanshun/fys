<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <slot :games="games">默认值s</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props:['title'],
    data(){
      return {
        foods:['火锅', '烧烤', '牛排', '家常菜', '烤鱼'],
        games:['博德之门3', '恶魔之魂重制版', '帕鲁', '塞尔达传说', '黑暗之魂'],
        films:['《教父》', '《整蛊专家》', '《新警察故事》', '《无间道》']
      }
    }
}
</script>

<style scoped>
    .category{
        background-color: aqua;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: blueviolet;
    }
</style>