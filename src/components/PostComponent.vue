<template>
  <div class="post-container">
    <input
      class="update1"
      ref="update1"
      v-model="title"
      type="text"
      :placeholder="post.title"
      disabled
    />
    <textarea
      class="update-post-body"
      ref="update-post-body"
      v-model="body"
      type="text"
      :placeholder="post.body"
      rows="5"
      disabled
    />
    <div class="btn-container">
      <button
        v-if="user?.role == 'admin'"
        @click="deletePostClicked(post.id)"
        type="button"
      >
        Obriši post
      </button>
      <button
        v-if="user?.role == 'admin'"
        @click="
          {
            console.log(klik);
            body.disabled = false;
            title.disabled = false;
          }
        "
        type="button"
      >
        Izmjeni post
      </button>
    </div>
  </div>
</template>

<script>
import { logout } from "./../services/login.js";
import { mapState, mapMutations } from "vuex";
export default {
  name: "post-component",
  props: {
    post: {
      id: "",
      title: "",
      body: "",
    },
  },
  components: {},

  methods: {
    ...mapMutations(["deletePost"]),

    deletePostClicked(id) {
      this.deletePost(id);
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.loggedInUser,
    }),
  },
};
</script>

<style scoped>
p {
  margin: 2rem;
}

textarea,
input {
  border: none;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.post-container {
  display: flex;
  flex-direction: column;
  align-self: center;
  border-radius: 0.5rem;
  background-color: var(--white);
  padding: 3rem;
  margin: 2rem;
}
</style>
