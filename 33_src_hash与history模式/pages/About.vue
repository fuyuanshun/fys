<template>
  <h2>我是About的内容</h2>
</template>

<script>
import { formToJSON } from 'axios';

export default {
    name : 'About',
    beforeRouteEnter(to, from, next){
        console.log("beforeRouteEnter")
        next();
    },
    beforeRouteLeave(to, from, next){
        console.log("beforeRouteLeave")
        next();
    }
}
</script>

<style>

</style>