<template>
  <div class="post-container">
    <input
      class="update1"
      ref="update1"
      v-model="postCopy.title"
      type="text"
      :disabled="!isEdit"
    />
    <textarea
      class="update-post-body"
      ref="update-post-body"
      v-model="postCopy.body"
      type="text"
      rows="5"
      :disabled="!isEdit"
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
        v-if="user?.role == 'admin' && !isEdit"
        @click="editClicked"
        type="button"
      >
        Izmjeni post
      </button>
      <button
        v-if="user?.role == 'admin' && isEdit"
        @click="saveClicked"
        type="button"
      >
        Sačuvaj
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "post-component",
  data() {
    return {
      isEdit: false,
      postCopy: {},
    };
  },

  props: {
    post: {
      type: Object,
      default: () => ({ id: "", title: "", body: "" }),
    },
  },
  components: {},

  methods: {
    ...mapMutations(["deletePost", "editPost"]),

    deletePostClicked(id) {
      this.deletePost(id);
    },
    editClicked() {
      this.isEdit = true;
    },
    saveClicked() {
      this.editPost(this.postCopy);
      this.isEdit = false;
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.loggedInUser,
    }),
  },
  mounted() {
    this.postCopy = { ...this.post };
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
