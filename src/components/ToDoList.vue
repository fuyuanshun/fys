<template>
    <ul class="todo-main">
        <li v-for="item in toDoList" :key="item.id">
            <label>
            <input type="checkbox" :checked="item.isChecked" @click="changeStatusItem(item.id, !item.isChecked)"/>
            <span v-show="!item.isEdit">{{item.toDoName}}</span>
            <!-- 不要用v-model！！！！ 会直接影响到数据，导致没有保存数据就被修改 -->
            <input 
            type="text"
            v-show="item.isEdit"  
            :value="item.toDoName"
            ref="inputTitle"
            :id="item.id"
            @blur="editItemBlur(item,$event)" 
            @keydown.enter="editItemBlur(item,$event)">
            </label>
            <button class="btn btn-danger" @click="deleteItem(item.id)">删除</button>
            <button class="btn btn-edit" v-show="!item.isEdit" @click="editItem(item)">编辑</button>
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
        },
        editItem(item){
            this.$set(item, 'isEdit', true);

            
          //多个li导致无法直接获取inputTitle然后获取焦点，需要根据id判断点击的具体是哪个
          for(var i = 0; i<this.$refs.inputTitle.length; i++){
            if(this.$refs.inputTitle[i].id == item.id){
              //在下一次DOM更新结束后执行回调
              this.$nextTick(function(){
                this.$refs.inputTitle[i].focus();
              })
              return;
            }
          }
        },
        editItemBlur(item, event){
          item.isEdit = false;
          if(event.target.value.trim() == ''){
            alert("不允许为空")
            return;
          }
          this.$bus.$emit('editItem', item.id, event.target.value)
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