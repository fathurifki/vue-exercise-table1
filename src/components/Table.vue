<template>
  <div>First Exercise Vue JS</div>
  <button @click="pushState">Create New</button>
  <select id="cars" name="cars" v-model="id" @click="handleFilter">
    <option value="1">Tier Of Captain</option>
    <option value="2">Tier Of Vice Captain</option>
    <option value="3">Tier Of Warlord</option>
    <option value="4">Tier Of Emperor</option>
    <option value="5">Tier Of Conqueror</option>
    <option value="6">Tier Of Super Soldier</option>
    <option value="7">Tier Of Sacred Warrior</option>
    <option value="8">Tier Of Great Thief</option>
    <option value="9">Tier Of Soldier</option>
    <option value="10">Tier Of Trainee</option>
  </select>
  <table>
    <thead>
      <tr>
        <td>UserId</td>
        <td>Title</td>
        <td>Body</td>
        <td>Action</td>
      </tr>
    </thead>
    <tbody v-for="item in sharedState.response">
      <tr>
        <!-- <input v-model="this.id" /> -->
        <td>
          {{ switchIdToChar(item.userId) }}
        </td>
        <td>{{ item.title }}</td>
        <td>{{ item.body }}</td>
        <button @click="logging(item.id)">update</button>
        <button @click="deletePayload(item.id)">delete</button>
      </tr>
    </tbody>
  </table>
  <button @click="handleBackPage">Back</button>
  <button @click="handleNextPage">Next</button>
</template>
<script>
import { reactive } from "vue";
import axios from "axios";

const store = {
  state: reactive({
    response: [],
    currentPage: 1,
  }),
  setState(val, key) {
    this.state[val] = key;
  },
};

export default {
  computed: {
    console: () => console,
  },
  data() {
    return {
      sharedState: store.state,
      id: 1,
    };
  },
  mounted() {
    this.mountApi();
  },
  methods: {
    logging(id) {
      this.$router.push("/form-edit/" + id);
    },
    switchIdToChar(id) {
      if (id === 1) {
        return "Tier Of Captain";
      }
      if (id === 2) {
        return "Tier Of Vice Captain";
      }
      if (id === 3) {
        return "Tier Of Warlord";
      }
      if (id === 4) {
        return "Tier Of Emperor";
      }
      if (id === 5) {
        return "Tier Of Conqueror";
      }
      if (id === 6) {
        return "Tier Of Super Soldier";
      }
      if (id === 7) {
        return "Tier Of Sacred Warrior";
      }
      if (id === 8) {
        return "Tier Of Great Thief";
      }
      if (id === 9) {
        return "Tier Of Soldier";
      }
      if (id === 10) {
        return "Tier Of Trainee";
      }
    },
    pushState() {
      return this.$router.push("/form");
    },
    deletePayload(id) {
      axios({
        method: "DELETE",
        url: `http://localhost:3010/posts/${id}`,
      })
        .then((res) => {
          const { status } = res;
          if (status === 200) {
            this.mountApi();
          }
        })
        .catch((err) => err);
    },
    handleNextPage() {
      axios
        .get("http://localhost:3010/posts", {
          params: {
            _limit: 10,
            _page: this.sharedState.currentPage + 1,
          },
        })
        .then((res) => {
          const { data } = res;
          store.setState("response", data);
        })
        .catch((err) => err);
    },
    handleBackPage() {
      axios
        .get("http://localhost:3010/posts", {
          params: {
            _limit: 10,
            _page:
              this.sharedState.currentPage > 1
                ? this.sharedState.currentPage - 1
                : 1,
          },
        })
        .then((res) => {
          const { data } = res;
          store.setState("response", data);
        })
        .catch((err) => err);
    },
    handleFilter() {
      axios
        .get(`http://localhost:3010/posts?userId=${this.id}`, {
          params: {
            _limit: 10,
            _page: this.sharedState.currentPage 
          },
        })
        .then((res) => {
          const { data } = res;
          store.setState("response", data);
        })
        .catch((err) => err);
    },
    mountApi() {
      axios
        .get("http://localhost:3010/posts", {
          params: {
            _limit: 10,
            _page: this.sharedState.currentPage,
          },
        })
        .then((res) => {
          const { data } = res;
          store.setState("response", data);
        })
        .catch((err) => err);
    },
  },
};
</script>