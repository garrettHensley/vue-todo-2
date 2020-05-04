<template>
  <div class="container mt-3 rounded">
    <div class="topBar text-center pt-3">
      <div class="row">
        <div class="col col-lg-2">
          <button @click="displayTodo = !displayTodo" class="btn btn-primary">
            <span v-if="displayTodo">Completed</span>
            <span v-else>Todo</span>
          </button>
        </div>
        <div class="col-6">
          <input
            v-model="inputText"
            @keyup.enter="addTo"
            type="text"
            placeholder="What needs to be done?"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <div class="todos">
      <ul class="list-group py-3">
        <li
          :class="{
            'list-group-item-info': displayTodo,
            'list-group-item-success': !displayTodo,
          }"
          class="list-group-item text-center lead"
        >
          <span v-if="displayTodo">Todo</span>
          <span v-else>Completed</span>:
        </li>
        <div v-if="displayTodo">
          <li
            v-for="(item, index) in todoList"
            :key="item.id"
            class="list-group-item d-flex justify-content-between"
          >
            <div v-if="!item.editting" @click="item.editting = !item.editting">
              {{ item.text }}
            </div>
            <div v-else @keyup.enter="item.editting = !item.editting">
              <input type="text" :placeholder="item.text" v-model="item.text" />
            </div>
            <div>
              <img
                src="@/assets/check.svg"
                @click="complete(index)"
                class="mr-1"
              />
              <img src="@/assets/x.svg" @click="remove(index)" class="ml-1" />
            </div>
          </li>
        </div>
        <div v-else>
          <li
            v-for="item in completedList"
            :key="item.id"
            class="list-group-item d-flex justify-content-between"
          >
            <div>
              {{ item.text }}
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
      displayTodo: true,
      todoList: [
        {
          text: "Write code!",
          complete: false,
          editting: false,
        },
      ],
      completedList: [],
    };
  },
  methods: {
    addTo() {
      this.todoList.push({
        text: this.inputText,
        complete: false,
        editting: false,
      });
    },
    remove(index) {
      this.todoList.splice(index, 1);
    },
    complete(index) {
      this.completedList.push(this.todoList[0]);
      this.todoList.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #91aab1;
}
input {
  background-color: #f1f0eb;
}
</style>
