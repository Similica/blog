import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import PostListComponent from "./components/PostListComponent.vue";
import NewPostComponent from "./components/NewPostComponent.vue";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginComponent,
    },
    {
      path: "/posts",
      name: "posts",
      component: PostListComponent,
    },
    {
      path: "/posts/new",
      name: "post",
      component: NewPostComponent,
    },
  ],
});

createApp(App).use(router).use(store).mount("#app");
