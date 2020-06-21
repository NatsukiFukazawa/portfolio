<template>
  <div>
    <h4>TODOリスト</h4>
    <todo-form @handleParentAddTodo="handleParentAddTodo" />
    <todo-list
      :todos="todos"
      @handleParentDeleteTodo="handleParentDeleteTodo"
      @handleParentCompleteTodo="handleParentCompleteTodo"
    />
  </div>
</template>

<script>
import TodoForm from "@/components/Todoform"
import TodoList from "@/components/TodoList"

    export default {
        name:"Todo",
        components:{
            TodoForm,
            TodoList
        },
        data(){
            return{
                todos:[],
            };
        },
        methods:{
            handleParentAddTodo(value){
                if(value){
                    this.todos.unshift({text:value, complete:false});
                    
                }
            },
            handleParentDeleteTodo(index){
                this.todos.splice(index,1);
                
            },
            handleParentCompleteTodo(index){
                this.todos[index].complete = !this.todos[index].complete;
            }
        },
    };
</script>

<style scoped>
</style>