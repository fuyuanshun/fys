<template>
    <ul class="todo-main">
        <li v-for="item in toDoList" :key="item.id">
            <label>
            <input type="checkbox" :checked="item.isChecked" @click="changeStatusItem(item.id, !item.isChecked)"/>
            <span>{{item.toDoName}}</span>
            </label>
            <button class="btn btn-danger" @click="deleteItem(item.id)">删除</button>
        </li>
    </ul>
</template>

<script>
export default {
    name:'ToDoList',
    props:['toDoList'],
    methods:{
        changeStatusItem(id, isChecked){
            // this.changeStatus(id, isChecked)
            this.$bus.$emit('cliChangeStatus', id, isChecked)
        },
        deleteItem(id){
            if(confirm('确定删除吗？')){
                // this.deleteToDo(id);
                this.$bus.$emit('cliDeleteToDo', id)
            }
        }
    }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button{
    display: block;
}
</style>