<template>
    <div>
        <Calculator/>
        <hr/>
        <Person/>
    </div>
</template>

<script>

import Calculator from './components/Calculator.vue'
import Person from './components/Person.vue'

export default {
    // 注册组件
    components:{
      Calculator,
      Person
    }
}
</script>

<style>

</style>