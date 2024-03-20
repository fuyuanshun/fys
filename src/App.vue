<template>
    <div>
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- 传的是一个函数，然后让子组件调用该函数，就可以把数据从子组件传给父组件 -->
                <ToDoHeader />
                <ToDoList :toDoList="toDoList" />
                <ToDoFooter :toDoList="toDoList" />
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
            toDoList : JSON.parse(localStorage.getItem('toDoList')) || []
        };
    },
    methods:{
        receive(id, toDoName){
          console.log("-----------")
            this.toDoList.unshift({'id':id, 'toDoName':toDoName, 'isChecked':false})
        },
        completeList(toDoList){
            this.toDoList = toDoList;
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
            this.toDoList = this.toDoList.filter(item => item.id != id);         
        },
        changeStatusAll(isChecked){
            this.toDoList.forEach(item=>item.isChecked=isChecked);
        },
        editItem(id, toDoName){
          this.toDoList.forEach(item=>{
              if(item.id == id){
                item.toDoName = toDoName;
                return;
              }
          });
        }
    },
    watch:{
      toDoList:{
        deep:true,
        handler(newValue){
          localStorage.setItem('toDoList', JSON.stringify(newValue));
        }
      }
    },
    mounted(){
        //绑定header的添加事件
        this.$bus.$on('cliReceive', this.receive);
        //绑定list的更新勾选和删除事件
        this.$bus.$on('cliChangeStatus', this.changeStatus)
        this.$bus.$on('cliDeleteToDo', this.deleteToDo)
        this.$bus.$on('editItem', this.editItem)
        //
        this.$bus.$on('completeList', this.completeList)
        this.$bus.$on('changeStatusAll', this.changeStatusAll)
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

.btn-edit {
  color: #fff;
  background-color: pink;
  border: 1px solid green;
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