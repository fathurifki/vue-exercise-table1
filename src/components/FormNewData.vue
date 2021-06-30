<template>
  <div>This is Form</div>
  <div v-bind:style="{ display: 'flex', flexDirection: 'column' }">
    <div v-bind:style="{ display: 'flex', flexDirection: 'row' }">
      <p>Title</p>
      <input placeholder="this is input" v-model="title" />
    </div>
    <div v-bind:style="{ display: 'flex', flexDirection: 'row' }">
      <p>Body</p>
      <input placeholder="this is input" v-model="body" />
    </div>
    <div v-bind:style="{ display: 'flex', flexDirection: 'row' }">
      <p>User id</p>
      <input placeholder="this is input" v-model="userId" />
    </div>
  </div>
  <button @click="postPayload">Submit</button>
  <button @click="backButtons">Back</button>
</template>
<script>
import { reactive } from "vue";
import axios from "axios";

const store = {
  state: reactive({
    userId: null,
    title: "",
    body: "",
  }),
  setState(key, value) {
    console.log("KEY", key);
    this.state[key] = value;
  },
  handleInputPayload(key, evt) {
    console.log("input", key);
    const { value } = evt.target;
    this.state[key] = value;
  },
};

export default {
  name: 'formNewData',
  data() {
    return {
      userId: null,
      title: "",
      body: "",
    };
  },
  methods: {
    backButtons() {
      return this.$router.push({ path: "/table" });
    },
    postPayload() {
      axios({
        method: "POST",
        url: "http://localhost:3000/posts",
        data: {
          userId: this.userId,
          title: this.title,
          body: this.body,
        },
      }).then((res) => console.log("RES", res));
    },
  },
};
</script>