<template>
  <div>
    <h1>Sector</h1>
    <svg id="sector-map" class="sector-map" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <hex
        v-for="hexData in getHexes()"
        :hexData="hexData"
        :key="hexData.key"
      ></hex>
    </svg>
  </div>
</template>

<script>
  import Hex from './hex';

  export default {
    components: { Hex },
    data() {
      return {
        radius: 45,
        columns: 8,
        rows: 10,
      };
    },
    methods: {
      getHexes() {
        const hexes = [];
        const radius = this.radius;
        const cols = this.columns;
        const rows = this.rows;

        for (let column = 0; column < cols; column += 1) {
          for (let row = 0; row < rows; row += 1) {
            const offset = (Math.sqrt(3) * radius) / 2;
            const x = offset * column * Math.sqrt(3);
            const y = (column % 2 !== 0) ? (offset * 2 * row) + offset : (offset * 2 * row);

            hexes.push({
              key: `hex${column}${row}`,
              radius,
              column,
              row,
              y,
              x,
            });
          }
        }

        return hexes;
      },
    },
};
</script>

<style scoped>
  .sector-map {
    height: 830px;
    width: 600px;
  }
</style>
