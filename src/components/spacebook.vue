<template>
  <div class="row">
    <div class="col-xs-12">
      <h2>Spacebook</h2>
      <hr/>
    </div>
    <div class="col-xs-12" v-for="user in spacebook">
      <div class="row">
        <div class="col-xs-2">
          <img class="profile-pic img-responsive" :src="imgUrl(user.last_name, user.first_name)">
        </div>
        <div class="col-xs-10">
          <div><a class="profile-link" href="#">{{ user.title }} {{ user.first_name }} {{ user.last_name }}</a></div>
          <div>{{ user.occupation }}, {{ user.employer }}</div>
          <div class="location">Lives on {{ user.location }}</div>
        </div>
      </div>
      <hr/>
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
    methods: {
      imgUrl(lastName, firstName) {
        return require(`../assets/${lastName.toLowerCase()}-${firstName.toLowerCase()}.jpg`);
      },

      sectorName(hex) {
        return this.$store.state.sector.systems[hex].name;
      },
    },
  };
</script>

<style scoped>
  .profile-link {
    font-weight: bold;
  }

  .location {
    color: #90949c;
  }
</style>
