<template>
  <div class="container mt-3 rounded">
    <div class="topBar text-center pt-3">
      <div class="row text-center mx-auto">
        <b-col class="mb-3">
          <b-button-group>
            <b-button
              @click="displayTodo = !displayTodo"
              class="btn"
              :class="[displayTodo ? 'bg-primary' : 'bg-secondary']"
            >
              Todo
            </b-button>
            <b-button
              @click="displayTodo = !displayTodo"
              class="btn"
              :class="[displayTodo ? 'bg-secondary' : 'bg-primary']"
            >
              Completed
            </b-button>
          </b-button-group>
        </b-col>
      </div>
      <div class="col">
        <input
          v-model="inputText"
          @keyup.enter="addTo"
          type="text"
          placeholder="What needs to be done?"
          class="form-control"
          id="input-guy"
        />

        <!-- Enables a sweet popover if the user tries to enter an empty String -->
        <b-popover :show.sync="show" target="input-guy" placement="top">Enter something you need to do, then press enter</b-popover>
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
//import $ from "jquery";

export default {
  data() {
    return {
      inputText: "",
      displayTodo: true,
      todoList: [
        {
          // Default object, this could be removed
          text: "Write code!",
          complete: false,
          editting: false,
        },
      ],
      completedList: [],
      show: false,
    };
  },
  methods: {
    addTo() {
      // Show #myPop popover if inputText is empty or falsy
      if (!this.inputText) {
        //$("#myPop").popover("show");
        this.show = true;
      } else {
        // Pushes a new object to todoList with inputText's value
        this.todoList.push({
          text: this.inputText,
          complete: false,
          editting: false,
        });
        this.inputText = ""; // Clears inputText so its ready for more input
        this.show = false;
      }
    },
    // remove from todolist, this could probably be added to function with completedList as well
    remove(index) {
      this.todoList.splice(index, 1);
    },
    // Adds an object from todoList to completedList, and then removes from todoList
    complete(index) {
      this.completedList.push(this.todoList[0]);
      this.todoList.splice(index, 1); //could possibly reuse the remove() function here. Need to explore if that would be more effecient
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
