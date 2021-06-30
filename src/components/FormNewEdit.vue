<template>
  <div>This is Form Edit</div>
  <div>{{ id }}</div>
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
  <button @click="postPayload(id)">Submit</button>
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
  name: "formNewEdit",
  props: ["id"],
  data() {
    return {
      userId: null,
      title: "",
      body: "",
    };
  },
  created() {
    console.log(this.$route.params);
  },
  mounted() {
    this.mountApi(this.id)
  },
  methods: {
    backButtons() {
      return this.$router.push({ path: "/table" });
    },
    mountApi(id) {
      axios({
        method: "GET",
        url: `http://localhost:3010/posts/${id}`,
      })
      .then(res => {
        const { data } = res
        this.userId = data.userId
        this.title = data.title
        this.body = data.body
      })
      .catch(err => err)
    },
    postPayload(id) {
      axios({
        method: "PUT",
        url: `http://localhost:3010/posts/${id}`,
        data: {
          id: this.id,
          userId: this.userId,
          title: this.title,
          body: this.body,
        },
      }).then((res) => console.log("RES", res));
    },
  },
};
</script>