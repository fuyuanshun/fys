<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <slot name="s"></slot>
        <slot name="s1">默认值s1</slot>
        <!-- <slot name="s2">默认值s2</slot> -->
    </div>
</template>

<script>
export default {
    name: 'Category',
    props:['title']
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