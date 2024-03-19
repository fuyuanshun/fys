<template>
    <div class="todo-footer" v-show="totalCount != 0">
        <label>
          <input type="checkbox" v-model="isAllCompleted"/>
        </label>
        <span>
          <span>已完成{{ completedCount }}</span> / 全部{{ totalCount }}
        </span>
        <button class="btn btn-danger" @click="clearCompleted">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'ToDoFooter',
    props:['toDoList', 'completeList', 'changeStatusAll'],
    computed:{
        completedCount(){
            return this.toDoList.reduce((pre, todo)=>{
                return pre + (todo.isChecked ? 1 : 0);
            }, 0)
        },
        totalCount(){
            return this.toDoList.length;
        },
        //事件全部完成时（并且不为0），勾选框会被勾选，
        isAllCompleted:{
            get(){
                return this.completedCount == this.totalCount && this.toDoList.length != 0;
            },
            set(value){
                this.changeStatusAll(value);
            }
        }
    },
    data(){
        return {
            tempList : []
        }
    },
    methods:{
        clearCompleted(){
            this.tempList = this.toDoList.filter(todo => todo.isChecked == false)
            
            this.completeList(this.tempList)
        }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>