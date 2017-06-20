<template>
  <div>
    <h2>Spacebook</h2>
    <hr/>
    <h3>Users</h3>
    <hr/>
    <div v-for="user in spacebook">
      {{ user.name }}, {{ user.occupation }}
    </div>
  </div>

</template>

<script>
  export default {
    name: 'spacebook',
    computed: {
      spacebook() {
        return this.$store.state.spacebook;
      },
    },
  };
</script>
