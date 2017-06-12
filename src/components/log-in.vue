<template>
  <form @submit="authenticate($event)">
    <h2>Log In</h2>
    <div class="form-group">
      <label for="login">Email:</label>
      <input id="login" type="email" v-model="login"/>
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input id="password" type="password" v-model="password"/>
    </div>
    <div class="form-group">
      <button type="submit">Log In</button>
    </div>
  </form>
</template>

<script>
  export default {
    methods: {
      data() {
        return {
          login: '',
          password: '',
        };
      },
      authenticate(event) {
        event.preventDefault();

        this.$store.dispatch('authenticate', {
          login: this.login,
          password: this.password,
        });
      },
    },
  };
</script>

<style scoped>
  .form-group {
    text-align: left;
  }
</style>
