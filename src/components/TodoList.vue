<template>
  <b-container>
    <b-row v-for="(todo,index) in todos" :key="index" class="mt-2">
      <b-col cols="8" class="text-left">
        <h5>{{todo.text}}</h5>
      </b-col>
      <b-col cols="4" class="text-right">
        <b-button
          @click="handleCompleteTodo(index)"
          :variant="todo.complete ? 'success':'danger'"
        >{{todo.complete ? '完了' :'未完了'}}</b-button>
        <b-button @click="handleDeleteTodo(index)">削除</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name:"TodoList",
        props:["todos"],
        methods:{
            handleDeleteTodo(index){
                this.$emit("handleParentDeleteTodo",index);
            },
            handleCompleteTodo(index){
                this.$emit("handleParentCompleteTodo",index);
            }
        },
    };
</script>

<style lang="sass" scoped>
</style>