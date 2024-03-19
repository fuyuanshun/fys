<template>
  <div>
    <h2><span>公司名称：</span>{{ name }}</h2>
    <h2><span>公司地址：</span>{{ location }}</h2>
    <button @click="cli">点击查看美女图片</button>

    <h2>部门列表</h2>
    <Department name="研发部" :persons="depPersons"/>
    <Department name="产品部"/>
  </div>
</template>

<script>
// 导入Department组件
import Department from './Department.vue'
import {ev} from '../mixin.js'

export default {
    name:'Company',
    components:{
        Department
    },
    data() {
        return {
            name: 'tenct',
            location: '深圳',
            depPersons:[
                {id:1, name:'fys', age:18},
                {id:2, name:'jcy', age:18},
                {id:3, name:'zxy', age:18},
                {id:4, name:'gx', age:30}
            ]
        }
    },
    mixins:[ev]
}
</script>

<style>

</style>
