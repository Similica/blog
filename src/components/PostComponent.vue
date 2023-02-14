<template>
  <div class="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
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
    // getTitle(list) {
    //   return this.title;
    // },
    // setTitle(value) {
    //   this.title = value;
    // },
    // getBody(list) {
    //   return this.body;
    // },
    // setBody(value) {
    //   this.Bbody = value;
    // },
  },

  methods: {
    deletePost(value) {
      this.$store.dispatch("deletePost", value);
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
}
</style>
