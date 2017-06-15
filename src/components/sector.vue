<template>
  <div>
    <h2>Sector {{ sectorName }}</h2>
    <svg id="sector-map" class="sector-map" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <hex
        v-for="hexData in hexes"
        :hexData="hexData"
        :key="hexData.key"
      ></hex>
      <chart
        v-for="chart in sectorCharts"
        :chart="chart"
        :hexes="hexes"
        :radius="45"
        :key="chart.id"
      ></chart>
    </svg>
  </div>
</template>

<script>
  import Hex from './hex';
  import Chart from './chart';
  import SystemOverview from './system-overview';
  import getHex from './mixins/get-hex-info';

  export default {
    name: 'sector',
    components: { Hex, Chart, SystemOverview },
    mixins: [getHex],
    data() {
      return {
        radius: 45,
        columns: 8,
        rows: 10,
      };
    },
    computed: {
      sectorName() {
        return this.$store.state.sector.name;
      },
      sectorSystems() {
        return this.$store.state.sector.systems;
      },
      sectorCharts() {
        return this.$store.state.sector.charts;
      },
      hexes() {
        const hexes = {};
        const radius = this.radius;
        const cols = this.columns;
        const rows = this.rows;

        for (let column = 0; column < cols; column += 1) {
          for (let row = 0; row < rows; row += 1) {
            const offset = (Math.sqrt(3) * radius) / 2;
            const x = offset * column * Math.sqrt(3);
            const y = (column % 2 !== 0) ? (offset * 2 * row) + offset : (offset * 2 * row);

            hexes[this.pad(column) + this.pad(row)] = {
              systemData: this.getSystemData(column, row),
              radius,
              column,
              row,
              y,
              x,
            };
          }
        }

        return hexes;
      },
    },
    methods: {
      getSystemData(column, row) {
        let systemData = null;

        if (this.sectorSystems) {
          systemData = this.sectorSystems[this.getHexNumber(column, row)];
        }

        return systemData;
      },
    },
  };
</script>

<style scoped>
  .sector-map {
    height: 826px;
    width: 565px;
  }
</style>
