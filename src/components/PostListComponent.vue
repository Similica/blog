<template>
  <div>
    <div class="header">
      <input
        v-model="searchValue"
        class="search"
        type="text"
        placeholder="Pretraga.."
      />
      <span><i class="fa-solid fa-magnifying-glass"></i></span>
      <div class="header-btns">
        <button
          v-if="user?.role == 'admin'"
          @click="addPostClicked()"
          type="button"
        >
          Dodaj post<span
            ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
          /></span>
        </button>
        <button @click="logOutClicked" type="button">Odjava</button>
      </div>
    </div>

    <div class="all-posts" v-if="posts && posts.length">
      <post-component
        v-for="post in filteredPosts"
        :key="post.id"
        post="post"
      />
    </div>
  </div>
</template>

<script>
import { logout } from "./../services/login.js";
import { mapState, mapMutations } from "vuex";
export default {
  name: "post-list-component",
  props: ["post-component"],
  components: {},
  data() {
    return {
      title: "",
      body: "",
      searchValue: "",
    };
  },

  methods: {
    ...mapMutations(["deletePost"]),

    logOutClicked() {
      logout();
    },
    deletePostClicked(id) {
      this.deletePost(id);
    },

    addPostClicked() {
      this.$router.push("/posts/new");
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.loggedInUser,
      posts: (state) => state.posts,
    }),
    filteredPosts() {
      return this.posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(this.searchValue.toLowerCase()) ||
          post.body.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      });
    },
  },
};
</script>

<style scoped>
p {
  margin: 2rem;
}

.search {
  margin: 2rem;
  border-radius: 0.5rem;
  height: 40px;
}
textarea,
input {
  border: none;
}
.header {
  display: flex;
  justify-content: space-between;
}
.header-btns {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.all-posts {
  display: flex;
  flex-direction: column;
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
