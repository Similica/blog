<template>
  <div class="banner">
    <h1>VRTLARSKI PODSJETNIK</h1>
  </div>
  <div class="form">
    <label>E-mail</label>
    <input v-model="email" type="email" />
    <label>Lozinka</label>
    <input v-model="password" type="password" />
    <button @click="loginClicked" type="button">Prijava</button>
  </div>
</template>

<script>
import { login } from "./../services/login.js";
export default {
  name: "login-component",
  props: {},
  components: {},

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginClicked() {
      login(this.email, this.password);
      console.log("login");
    },
  },
};
</script>

<style scoped>
.form {
  margin: 30px auto;
  padding: 5rem 5rem;
  border-radius: 0.5rem;
  background-color: var(--white);
  width: fit-content;
}
.banner {
  background-color: var(--green);
  margin: 4rem 0;
}
button {
  display: block;
  margin: 0;
}
</style>
