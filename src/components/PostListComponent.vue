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
      <div class="post-container" v-for="post in filteredPosts" :key="post.id">
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
    </div>
  </div>
</template>

<script>
import { logout } from "./../services/login.js";
import { addPost } from "./../services/posts.js";
import { mapState, mapActions, mapMutations } from "vuex";
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
    ...mapActions(["getPosts", "addPost"]), //akciju sad mogu kao metodu (vuex daje to umjesto dispatch)

    logOutClicked() {
      logout();
    },
    deletePostClicked(id) {
      this.deletePost(id);
    },

    addPostClicked() {
      addPost();
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

  mounted() {
    this.getPosts();
  },
  unmounted() {
    this.getPosts();
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
