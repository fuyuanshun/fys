<template>
    <div>
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- 传的是一个函数，然后让子组件调用该函数，就可以把数据从子组件传给父组件 -->
                <ToDoHeader :receive="receive"/>
                <ToDoList :toDoList="toDoList" :changeStatus="changeStatus" :deleteToDo="deleteToDo"/>
                <ToDoFooter :toDoList="toDoList" :completeList="completeList" :changeStatusAll="changeStatusAll"/>
            </div>
        </div>
    </div>
</template>

<script>
//导入Company组件

import ToDoHeader from './components/ToDoHeader.vue'
import ToDoList from './components/ToDoList.vue'
import ToDoFooter from './components/ToDoFooter.vue'

export default {
    // 注册组件
    components:{
        ToDoHeader,
        ToDoList,
        ToDoFooter
    },
    data(){
        return {
            id:4,
            toDoList : [
                {'id':1, 'toDoName':'吃饭', 'isChecked':false}, 
                {'id':2, 'toDoName':'睡觉', 'isChecked':true}, 
                {'id':3, 'toDoName':'打豆豆', 'isChecked':false}
            ]
        };
    },
    methods:{
        receive(id, toDoName){
            this.toDoList.unshift({'id':id, 'toDoName':toDoName, 'isChecked':false})
        },
        completeList(todoList){
            this.toDoList = todoList;
        },
        changeStatus(id, isChecked){
            this.toDoList.forEach(item => {
                if(item.id == id){
                    item.isChecked = isChecked;
                    return;
                }
            })
        },
        deleteToDo(id){
            // for(var i = 0; i < this.toDoList.length; i++){
            //     if(this.toDoList[i].id == id){
            //         this.toDoList.splice(i, 1);
            //         console.log(this.toDoList)
            //         return;
            //     }
            // }
            this.toDoList = this.toDoList.filter(item => item.id != id);         
        },
        changeStatusAll(isChecked){
            this.toDoList.forEach(item=>item.isChecked=isChecked);
        }
    }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>