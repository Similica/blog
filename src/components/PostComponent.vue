<template>
  <div>
    <div class="header-btns">
      <button id="back-btn" @click="backClicked" type="button">Nazad</button>
      <button @click="logOutClicked" type="button">Odjava</button>
    </div>
    <div class="form">
      <h1>Novi post</h1>

      <input v-model="title" type="text" placeholder="Naslov" />
      <textarea v-model="body" type="text" placeholder="Sadržaj" rows="5" />
      <button @click="storePost" type="button">Objavi</button>
    </div>
  </div>
</template>

<script>
import { logout, postsPage } from "./../services/login.js";
import { addPost } from "@/services/posts";
import { mapState, mapActions } from "vuex";
export default {
  name: "post-component",
  props: {},
  components: {},
  data() {
    return {
      title: "",
      body: "",
    };
  },

  computed: {
    ...mapState({
      user: (state) => state.loggedInUser,
      posts: (state) => state.posts,
    }),
  },

  methods: {
    ...mapActions(["addPost", "getPosts"]),

    deletePost(value) {
      this.$store.dispatch("deletePost", value); //dispatch zove druge fje
    },
    logOutClicked() {
      logout();
    },
    backClicked() {
      console.log("back");
      postsPage();
    },
    storePost() {
      console.log("store");
      addPost();
    },
    setTitle(value) {
      this.title = value;
    },

    setBody(value) {
      this.Bbody = value;
    },
  },

  mounted() {
    this.getPosts();
  },
};
</script>

<style scoped>
.post {
  padding: 1rem;
  margin: 1rem 10rem;
  border: 1px solid var(--black);
  border-radius: 8px;
  background: var(--white);
  align-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  margin: 1rem auto;
  padding: 0 4rem;
  border-radius: 0.5rem;
  width: fit-content;
}
.header-btns {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
