
<template>
    <div>
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="showName">提示</button>
    </div>
</template>

<script>
export default {
    name: 'School',
    data(){
        return {
            name: 'fys',
            age: 18
        }    
    },
    methods :{
        showName(){
            alert(this.name)
        }
    }
}
</script>


<style>
    
</style>