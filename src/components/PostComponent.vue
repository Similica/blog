<template>
  <div>
    <div class="header-btns">
      <button id="back-btn" @click="backClicked" type="button">Nazad</button>
      <button @click="logOutClicked" type="button">Odjava</button>
    </div>
    <div class="form">
      <h1>Novi post</h1>

      <input v-model="post.title" type="text" placeholder="Naslov" />
      <textarea
        v-model="post.body"
        type="text"
        placeholder="Sadržaj"
        rows="5"
      />
      <button @click="addPostClicked()" type="button">Objavi</button>
    </div>
  </div>
</template>

<script>
import { logout } from "./../services/login.js";
import { mapMutations } from "vuex";
export default {
  name: "post-component",
  props: {},
  components: {},
  data() {
    return {
      post: {
        id: "",
        title: "",
        body: "",
      },
    };
  },

  methods: {
    ...mapMutations(["addPost"]),

    logOutClicked() {
      logout();
    },
    backClicked() {
      this.$router.back();
    },
    addPostClicked() {
      this.post.id = Date.now();
      this.addPost(this.post);
      this.$router.push("/posts");
    },
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
