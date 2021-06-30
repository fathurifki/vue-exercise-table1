
import {createRouter, createWebHistory} from "vue-router";
import Goodbye from "../components/HelloWorld";
import Hello from "../components/Hello.vue";
import Table from "../components/Table";
import Form from "../components/FormNewData";
import Edit from "../components/FormNewEdit";



const routerHistory = createWebHistory();

const routes = [
  {
    path: "/foo",
    component: Goodbye
  },
  {
    path: "/bar",
    component: Hello
  },
  {
    path: "/table",
    component: Table,
  },
  {
    path: "/form",
    component: Form,
    props: true,
    // children: [
    //   {
    //     path: "/form-edit/:id",
    //     name: "formNewEdit",
    //     component: Edit,
    //     props: true,
    //   },
    // ]
  },
  {
    path: "/form-edit/:id",
    name: "formNewEdit",
    component: Edit,
    props: true,
  },
];

const router = createRouter({
  history: routerHistory,
  routes
});

export default router