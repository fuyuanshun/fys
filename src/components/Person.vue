<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入人员名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <br>
    <h3>第一个人名：{{ firstPersonName }}</h3>
    <ul>
        <li v-for="(person, index) in personList" :key="index">{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { nanoid } from 'nanoid'

export default {
    name:'Person',
    data(){
      return {
        name:''
      }
    },
    methods: {
      add(){
        //组装person对象
        let person = {
          id: nanoid(),
          name: this.name
        }
        //
        this.$store.commit("personOptions/ADD_PERSON", person)
        this.name = ''
      },
      addWang(){
        //组装person对象
        let person = {
          id: nanoid(),
          name: this.name
        }
        this.$store.dispatch('personOptions/addWang', person)
        this.name = ''
      }
    },
    computed:{
      ...mapState('personOptions', ['personList']),
      firstPersonName(){
        // console.info(this.$store)
        return this.$store.getters['personOptions/firstPersonName'];
      }
    }
}
</script>

<style>

</style>