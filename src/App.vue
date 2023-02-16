<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {},
  methods: {
    ...mapActions(["getPosts"]),
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style>
@import "app.css";
</style>
