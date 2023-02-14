<template>
  <div>
    <h1>Postovi{{ user?.name }}</h1>
    <!-- <button @click="newPostClicked" type="button">Dodaj post</button> -->
    <div v-if="posts && posts.length" class="post">
      <div v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
    <!-- <div v-if="errors && errors.length">
      <div v-for="errors in errors">{{ error.message }}</div>
    </div> -->
    <!-- <div class="post-form">
      <input type="text" v-model="title" />
      <input type="text" v-model="body" />
    </div>
    <button @click="postPost">Objavi post</button> -->
    <!-- <button
        @click="deletePostClicked({item.getTitle(),item.getBody()}) type="button" >
        Obriši post
      </button> -->
    <!-- <div v-if="state.loggedInUser.role == 'admin'">
        <button>Izmijeni</button>
        <button></button>
      </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
//import axios from "axios";
export default {
  name: "post-list-component",
  props: ["post-component"],
  components: {},
  data() {
    return {
      // title: "",
      // body: "",

      errors: [],
    };
  },

  methods: {
    // async postPost() {
    //   try {
    //     await axios.post("https://jsonplaceholder.typicode.com/posts", {
    //       title: this.title,
    //       body: this.body,
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
  },
  computed: mapState({
    user: (state) => state.loggedInUser,
    posts: (state) => state.posts,
  }),
};
</script>

<style scoped>
h1 {
  margin: 2rem;
}
.post-form {
  display: flex;
  flex-direction: column;
}
</style>
