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
    post: {
      postId: "",
      title: "",
      body: "",
    },
    posts: [],
  },
  getters: {},
  mutations: {
    // findPostById(id) {
    //   return this.posts.find((post) => post.id === id);
    // },

    setLoggedInUser(state, user) {
      state.loggedInUser = user;
    },

    clearLoggedInUser(state) {
      state.loggedInUser = null;
    },
    // setPosts(state, posts) {
    //   state.posts = posts;
    // },
    setPosts(state, postsData) {
      state.posts = postsData;
    },
    saveThisPost(state, post) {
      state.posts = [post, ...state.posts];
      console.log(state.posts);
    },
    // setPost(state, postId) {
    //   state.post = findPostById(postId);
    // },
    // addPost(state.post) {
    //   state.posts.push(post);
    // },
    // deletePost(state,post) {
    //   state.posts.removeItem(post);
    // },
    deletePost(state, postId) {
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
  },
  actions: {
    login({ commit }, user) {
      commit("setLoggedInUser", user);
    },

    async getPosts({ commit }) {
      commit("setPosts", await fetchPosts());
    },

    deletePost({ commit }, post) {
      commit("deletePost", post);
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
