<template>
    <ul>
        <li>消息编号：{{ id }}</li>
        <li>{{ content }}</li>
    </ul>
</template>

<script>
export default {
    name : 'Detail',
    props:['id', 'content']
}
</script>