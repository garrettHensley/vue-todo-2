<template>
  <div id="app">
    <Toast />
    <Todo />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import Toast from "@/components/Toast.vue";

export default {
  name: "App",
  components: {
    Todo,
    Toast,
  },
};
</script>

<style>
html body {
  background-image: url(~@/assets/bg.jpg);
}
</style>
