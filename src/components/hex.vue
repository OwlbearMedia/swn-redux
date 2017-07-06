<template>
  <svg class="hex-container" :x="hexData.x" :y="hexData.y" @click="selectSystem">
    <polygon :class="{ hex: true, 'hovered': isHovered, 'show-grid': showHexGrid }" :points="hexPoints(hexData.radius)"></polygon>
    <text class="system-name" v-if="hexData.systemData && hexData.systemData.explored" :x="hexData.radius" y="30">
      {{ hexData.systemData.name }}
    </text>
    <star v-if="hexData.systemData" :center="hexData.radius" :star="hexData.systemData.star"></star>
    <text :class="{ 'hex-number': true, 'show-grid': showHexGrid }" :x="hexData.radius" y="75">
      {{ hexNumber }}
    </text>
  </svg>
</template>

<script>
  import Star from './star';
  import getHex from './mixins/get-hex-info';

  export default {
    name: 'hex',
    components: { Star },
    mixins: [getHex],
    props: ['hexData', 'showHexGrid'],
    computed: {
      hexNumber() {
        return this.getHexNumber(this.hexData.column, this.hexData.row);
      },
      isHovered() {
        return this.$store.state.systemHovered === this.hexNumber;
      },
    },
    methods: {
      hexPoints(radius) {
        const points = [];

        for (let theta = 0; theta < Math.PI * 2; theta += Math.PI / 3) {
          const pointX = Math.round(radius + (radius * Math.cos(theta)));
          const pointY = Math.round(radius + (radius * Math.sin(theta)));

          points.push(`${pointX},${pointY}`);
        }

        return points.join(' ');
      },
      selectSystem(event) {
        event.preventDefault();
        this.$router.push({ name: 'SystemOverview', params: { id: this.hexNumber } });
      },
    },
  };
</script>

<style scoped>
  .hex {
    cursor: pointer;
    fill: transparent;
  }

  .hex.show-grid {
    stroke: #f5f5dc;
    stroke-width: 2px;
  }

  .hex.hovered {
    fill: lightslategray;
  }

  .hex-number {
    fill: transparent;
    font-size: 12px;
    text-anchor: middle;
  }

  .hex-number.show-grid {
    fill: #fff;
  }

  .system-name {
    fill: #fff;
    font-size: 10px;
    text-anchor: middle;
  }
</style>
