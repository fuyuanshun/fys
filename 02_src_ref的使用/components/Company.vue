<template>
  <div>
    <h2><span>公司名称：</span>{{ name }}</h2>
    <h2><span>公司地址：</span>{{ location }}</h2>
    <h2>部门列表</h2>
    <Department ref="dep"/>
    <button @click="cli">获取子组件实例</button>
  </div>
</template>

<script>
// 导入Department组件
import Department from './Department.vue'

export default {
    name:'Company',
    components:{
        Department
    },
    data() {
        return {
            name: 'tenct',
            location: '深圳'
        }
    },
    methods:{
        cli(){
            //
            console.log(this.$refs.dep)
        }
    }
}
</script>

<style>

</style>
