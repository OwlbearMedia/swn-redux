<template>
  <div class="system-information">
    <h2>{{ system.name }} System Information</h2>

    <div class="system-description" v-if="system.description">{{ system.description }}</div>

    <div v-if="system.star">
      <h4>Star</h4>

      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th v-if="system.star.name">Name</th>
              <th v-if="system.star.type">Type</th>
              <th v-if="system.star.mass">Mass <span class="small" title="Solar mass">M☉</span></th>
              <th v-if="system.star.radius">Radius <span class="small" title="Solar radius">R☉</span></th>
              <th v-if="system.star.luminosity">Luminosity <span class="small" title="Solar luminosity">L☉</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-if="system.star.name">{{ system.star.name }}</td>
              <td v-if="system.star.type">{{ system.star.type }}</td>
              <td v-if="system.star.mass">{{ system.star.mass }}</td>
              <td v-if="system.star.radius">{{ system.star.radius }}</td>
              <td v-if="system.star.luminosity">{{ system.star.luminosity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="system.celestialBodies">

      <h3 class="celestial-bodies">Major Celestial Bodies</h3>

      <div v-for="(world, index) in system.celestialBodies">
        <h4>
          <editable-text :path="`systems[${id}].celestialBodies[${index}].name`">
            {{ world.name }}
          </editable-text>
        </h4>

        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
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
            </thead>
            <tbody>
              <tr>
                <td v-if="world.type">
                  <editable-text :path="`systems[${id}].celestialBodies[${index}].type`">
                    {{ world.type }}
                  </editable-text>
                </td>
                <td v-if="world.atmosphere">
                  <editable-text :path="`systems[${id}].celestialBodies[${index}].atmosphere`">
                    {{ world.atmosphere }}
                  </editable-text>
                </td>
                <td v-if="world.temperature">
                  <editable-text :path="`systems[${id}].celestialBodies[${index}].temperature`">
                    {{ world.temperature }}
                  </editable-text>
                </td>
                <td v-if="world.biosphere">
                  <editable-text :path="`systems[${id}].celestialBodies[${index}].biosphere`">
                    {{ world.biosphere }}
                  </editable-text>
                </td>
                <td v-if="world.gravity">
                  {{ world.gravity }}g
                </td>
                <td v-if="world.radius">
                  {{ world.radius }} Earth
                </td>
                <td v-if="world.moons">
                  <editable-text :path="`systems[${id}].celestialBodies[${index}].moons`">
                    {{ world.moons }}
                  </editable-text>
                </td>
                <td v-if="world.population !== undefined">{{ world.population | addCommas }}</td>
                <td v-if="world.techLevel">{{ world.techLevel }}</td>
                <td v-if="world.notes">{{ world.notes }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import EditableText from './editable-text';

  export default {
    name: 'system-info',
    components: { EditableText },
    props: ['id'],
    computed: {
      system() {
        if (this.$store.state.sector && this.$store.state.sector.systems) {
          return this.$store.state.sector.systems[this.id];
        }
        return {};
      },
    },
    filters: {
      addCommas(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      },
    },
  };
</script>

<style scoped>
  .system-description {
    margin-bottom: 20px;
  }

  .small {
    color: #666;
    cursor: pointer;
    font-size: 10px;
  }

  .celestial-bodies {
    border-top: 1px #aaa solid;
    border-bottom: 1px #aaa solid;
    padding: 5px;
  }

  h4 {
    font-size: 1.17em;
    margin: .5em 0;
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
