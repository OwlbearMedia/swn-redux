<template>
  <div>
    <h2>System Registry</h2>
    <div class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead>
        <tr>
          <th>Hex</th>
          <th>System</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(system, key) in systems" v-if="system.explored">
            <td>{{ key }}</td>
            <td>{{ system.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'system-registry',
    computed: {
      systems() {
        return this.$store.state.sector.systems;
      },
    },
  };
</script>
