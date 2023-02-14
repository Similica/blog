<template>
  <div>
    <h1>Postovi{{ user?.name }}</h1>
    <button @click="logOutClicked" type="button">Odjava</button>
    <!-- <button @click="newPostClicked" type="button">Dodaj post</button> -->
    <div v-if="posts && posts.length" class="post">
      <div v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <button
          v-if="user?.role == 'admin'"
          @click="deletePostClicked(post.id)"
          type="button"
        >
          Obriši post
        </button>
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
import { logout } from "./../services/login.js";
import { onMounted } from "vue";
import { mapState, mapActions } from "vuex";
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
    logOutClicked() {
      logout();
    },
    deletePostClicked() {},
    ...mapActions(["getPosts"]), //akciju sad mogu kao metodu (vuex daje to umjesto dispatch)
  },
  computed: mapState({
    user: (state) => state.loggedInUser,
    posts: (state) => state.posts,
  }),
  setup() {
    onMounted(() => {
      console.log("onMounted");
      this.getPosts();
    });
  },
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
