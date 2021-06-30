<template>
  <div>
    <p>Pokemon Table</p>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">test</div>
    <input type="text" v-model="sharedState.message" @change="setMessage" />
    <button @click="pushState">Push State</button>
    <!-- <p>{{ sharedState.message }}</p> -->
    <!-- <p>{{ sharedState.response }}</p> -->
    <!-- <table>
      <thead v-for="item in header">
        <div v-bind:style="{ display: 'flex', flexDirection: 'column' }">
          <span>
            {{ item }}
          </span>
        </div>
      </thead>
      <tbody v-for="item in sharedState.responseListAll">
        <span v-for="(value, key, index) in item">
          {{ value }}
        </span>
      </tbody>
    </table> -->
  </div>
</template>

<script>
import api from "../api/api";
import axios from "axios";
import { reactive } from "vue";

const store = {
  state: reactive({
    message: "Hello",
    response: {},
    responseListAll: [],
  }),
  setMessage(val) {
    return (this.state.message = val);
  },
  setState(val, key) {
    this.state[val] = key;
  },
};

export default {
  data() {
    return {
      sharedState: store.state,
      activeColor: "red",
      fontSize: 30,
      header: ["UserId", "Title", "Status"],
    };
  },
  mounted() {
    this.mountApi();
    this.mountApiListAll();
    console.log("sharedState", this.sharedState);
  },
  methods: {
    mountApi() {
      // const res = api.getTCGCards()
      // console.log('RES', res)
      axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => {
          const { data } = res;
          return store.setState("response", data);
        })
        .catch((err) => err);
      store.setMessage("Test");
    },
    pushState() {
      return this.$router.push({ path: '/foo' })
    },
    mountApiListAll() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos", {
          params: {
            _limit: 10,
          },
        })
        .then((res) => {
          const { data } = res;
          return store.setState("responseListAll", data);
        })
        .catch((err) => err);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
