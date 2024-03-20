<template>
    <div>
        <button @click="getStudents">发送请求-student</button>
        <button @click="getCars">发送请求-cars</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'App',
    methods: {
      getStudents(){
        axios.get('http://localhost:8080/fys/students').then(
          response=>{
            console.log('请求成功', response.data)
          },
          error=>{
            console.log("请求失败：", error.message)
          }
        )
      },
      getCars(){
        axios.get('http://localhost:8080/car/cars').then(
          response=>{
            console.log('请求成功', response.data)
          },
          error=>{
            console.log("请求失败：", error.message)
          }
        )
      },
    },
}
</script>

<style>
</style>