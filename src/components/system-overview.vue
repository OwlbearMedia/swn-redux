<template>
  <div class="system-information">
    <h2>{{ system.name }} System Information</h2>

    <div v-if="system.star">
      <h4>Star</h4>

      <table>
        <tr>
          <th v-if="system.star.name">Name</th>
          <th v-if="system.star.type">Type</th>
          <th v-if="system.star.mass">Mass <span class="small" title="Solar mass">M☉</span></th>
          <th v-if="system.star.radius">Radius <span class="small" title="Solar radius">R☉</span></th>
          <th v-if="system.star.luminosity">Luminosity <span class="small" title="Solar luminosity">L☉</span></th>
        </tr>
        <tr>
          <td v-if="system.star.name">{{ system.star.name }}</td>
          <td v-if="system.star.type">{{ system.star.type }}</td>
          <td v-if="system.star.mass">{{ system.star.mass }}</td>
          <td v-if="system.star.radius">{{ system.star.radius }}</td>
          <td v-if="system.star.luminosity">{{ system.star.luminosity }}</td>
        </tr>
      </table>
    </div>

    <div v-if="system.stellarBodies">
      <div v-for="world in system.stellarBodies">
        <h4>{{ world.name }}</h4>

        <table>
          <tr>
            <th v-if="world.type">Type</th>
            <th v-if="world.atmosphere">Atmosphere</th>
            <th v-if="world.temperature">Temperature</th>
            <th v-if="world.biosphere">Biosphere</th>
            <th v-if="world.gravity">Gravity</th>
            <th v-if="world.radius">Radius</th>
            <th v-if="world.moons">Moons</th>
            <th v-if="world.population !== undefined">Population</th>
            <th v-if="world.techLevel">Tech Level</th>
            <th v-if="world.notes">Notes</th>
          </tr>
          <tr>
            <td v-if="world.type">{{ world.type }}</td>
            <td v-if="world.atmosphere">{{ world.atmosphere }}</td>
            <td v-if="world.temperature">{{ world.temperature }}</td>
            <td v-if="world.biosphere">{{ world.biosphere }}</td>
            <td v-if="world.gravity">{{ world.gravity }} g</td>
            <td v-if="world.radius">{{ world.radius }} Earth</td>
            <td v-if="world.moons">{{ world.moons }}</td>
            <td v-if="world.population !== undefined">{{ world.population | addCommas }}</td>
            <td v-if="world.techLevel">{{ world.techLevel }}</td>
            <td v-if="world.notes">{{ world.notes }}</td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'system-info',
    props: ['system'],
    filters: {
      addCommas(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      },
    },
  };
</script>

<style scoped>
  .system-information {
    max-width: 600px  ;
  }

  .small {
    color: #666;
    cursor: pointer;
    font-size: 10px;
  }

  h4 {
    font-size: 1.17em;
    margin: .5em 0;
  }

  table {
    border: 1px #aaa solid;
    border-spacing: 0;
  }

  th, td {
    border-right: 1px #aaa solid;
    padding: 0 5px;
  }

  th {
    border-bottom: 1px #aaa solid;
  }

  th:last-child, td:last-child {
    border-right: 0;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin: 0;
  }

  div {
    text-align: left;
  }
</style>
