<template>
    <ul>
        <li>消息编号：{{ $route.params.id }}</li>
        <li>{{ $route.params.content }}</li>
    </ul>
</template>

<script>
export default {
    name : 'Detail'
}
</script>