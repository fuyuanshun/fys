<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入人员名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="(person, index) in personList" :key="index">{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { nanoid } from 'nanoid'

export default {
    name:'Person',
    data(){
      return {
        name:''
      }
    },
    methods: {
      add(v){
        console.log("-----",v)
        let person = {
          id: nanoid(),
          name: this.name
        }
        this.$store.commit("ADD_PERSON", person)
        this.name = ''
      }
    },
    computed:{
      ...mapState(['personList'])
    }
}
</script>

<style>

</style>