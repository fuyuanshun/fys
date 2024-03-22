<template>
    <ul>
        <li>消息编号：{{ $route.query.id }}</li>
        <li>{{ $route.query.content }}</li>
    </ul>
</template>

<script>
export default {
    name : 'Detail'
}
</script>