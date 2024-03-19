<template>
  <div>
        <h3 class="a">{{ name }}</h3>
        <span>人员列表</span>
        <ul>
            <li v-for="person in persons" :key="person.id">{{person.name}} {{ person.age }}</li>
        </ul>
  </div>
</template>

<script>
export default {
    name:'Department',
    props:{
        name:{
            type: String,
            required : true
        },
        persons:{
            type: Array,
            required: false,
            default: ()=>{
                return [
                    {id:1, name:'fys', age:18},
                    {id:2, name:'jcy', age:18},
                    {id:3, name:'zxy', age:18},
                    {id:4, name:'gx', age:30}
                ]
            }
        }
    }
}
</script>

<style>
    .a{
        color:green;
    }
</style>