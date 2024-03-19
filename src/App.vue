<template>
      <div class="appCss">
          <h1>你好啊！ {{ studentName }}</h1>
          <School @cli="send"/>
          <Student ref="student"/>
      </div>
</template>

<script>
//导入Company组件

import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
    // 注册组件
    components:{
        School,
        Student
    },
    data(){
      return {
        'studentName':''
      }
    },
    methods:{
      send(v){
        console.log(v)
        this.studentName = v;
      }
    },
    mounted(){
      this.$refs.student.$on("cli", this.send)

      //自定义事件回调函数的this指向的“谁调用，this是谁”，所以这个this时student
      // this.$refs.student.$on("cli", function(v){
      //   console.log(v)
      //   this.studentName = v;
      // })

      //写成箭头函数即可向上找到app的this实例
      // this.$refs.student.$on("cli", (v)=>{
      //   console.log(v)
      //   this.studentName = v;
      // })
    }
}
</script>

<style>
  .appCss{
    background-color: gray;
    padding: 5px;
  }
</style>