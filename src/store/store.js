import axios from "axios";
import { createStore } from "vuex";
import { fetchPosts } from "@/services/posts";
//import { random } from "core-js/core/number";
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
    // dispach za akcije commit za mutacije

    setLoggedInUser(state, user) {
      state.loggedInUser = user;
    },

    clearLoggedInUser(state) {
      state.loggedInUser = null;
    },

    setPosts(state, postsData) {
      state.posts = postsData;
    },

    deletePost(state, postId) {
      state.posts = state.posts.filter((post) => post.id !== postId);
    },

    addPost(state, post) {
      state.posts = [post, ...state.posts];
    },

    editPost(state, post) {
      const editedPost = state.posts.find((p) => p.id == post.id);
      editedPost.title = post.title;
      editedPost.body = post.body;
    },
  },
  actions: {
    login({ commit }, user) {
      commit("setLoggedInUser", user);
    },

    async getPosts({ commit }) {
      commit("setPosts", await fetchPosts());
    },

    deletePost({ commit }, postId) {
      commit("deletePost", postId);
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
