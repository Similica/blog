import axios from "axios";
import { createStore } from "vuex";
import { fetchPosts } from "@/services/posts";
export const store = createStore({
  state: {
    loggedInUser: {
      name: "",
      email: "",
      role: "",
    },

    posts: [],
  },
  getters: {},
  mutations: {
    setLoggedInUser(state, user) {
      state.loggedInUser = user;
    },

    clearLoggedInUser(state) {
      state.loggedInUser = null;
    },

    setPosts(state, postsData) {
      state.posts = postsData;
    },
  },

  actions: {
    login({ commit }, user) {
      commit("setLoggedInUser", user);
    },
    async getPosts({ commit }) {
      commit("setPosts", await fetchPosts());
    },
  },
  fetchPosts({ commit }) {
    const baseURL = "https://jsonplaceholder.typicode.com/posts";

    axios
      .get(baseURL)
      .then((response) => {
        commit("setPostData", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
