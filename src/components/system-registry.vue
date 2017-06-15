<template>
  <div>
    <h2>System Registry</h2>
    <div class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead>
        <tr>
          <th>Hex</th>
          <th>System</th>
          <th>Populated Planets/Stations</th>
        </tr>
        </thead>
        <tbody>
          <tr
            v-for="(system, key) in systems"
            v-if="system.explored"
            @mouseover="$store.commit('setSystemHovered', key)"
            @mouseout="$store.commit('setSystemHovered', null)"
            @click="$router.push({ path: `system-overview/${key}` })">
            <td>{{ key }}</td>
            <td>{{ system.name }}</td>
            <td>
              <div v-for="celestialBody in system.celestialBodies" v-if="celestialBody.population">
                {{ celestialBody.name }}
              </div>
            </td>
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

<style scoped>
  tbody tr {
    cursor: pointer;
  }
</style>
