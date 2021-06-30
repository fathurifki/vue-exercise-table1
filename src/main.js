import { createApp } from "vue";
import router from './router/router'
import App from "./App.vue";



// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.

createApp(App).use(router).mount("#app");
