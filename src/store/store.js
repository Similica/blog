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
    // findPostById(id) {
    //   return this.posts.find((post) => post.id === id);
    // },
    setLoggedInUser(state, user) {
      state.loggedInUser = user;
    },
    // setPosts(state, posts) {
    //   state.posts = posts;
    // },
    setPosts(state, postsData) {
      state.posts = postsData;
    },
  },
  // addPost(state.post) {
  //   state.posts.push(post);
  // },
  // deletePost(state,post) {
  //   state.posts.removeItem(post);
  // },

  actions: {
    login({ commit }, user) {
      commit("setLoggedInUser", user);
    },
    async getPosts({ commit }) {
      commit("setPosts", await fetchPosts());
    },

    addPost({ commit }, post) {
      commit("addPost", post);
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
