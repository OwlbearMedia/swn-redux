<template>
  <svg class="hex-container" :x="hexData.x" :y="hexData.y" @click="selectSystem">
    <polygon :class="{ hex: true, 'hovered': isHovered }" :points="hexPoints(hexData.radius)"></polygon>
    <text class="system-name" v-if="hexData.systemData && hexData.systemData.explored" :x="hexData.radius" y="30">
      {{ hexData.systemData.name }}
    </text>
    <circle v-if="hexData.systemData" :cx="hexData.radius" :cy="hexData.radius" r="7" stroke="#E3BB27" stroke-width="1" fill="#FCD440"></circle>
    <text class="hex-number" :x="hexData.radius" y="75">
      {{ hexNumber }}
    </text>
  </svg>
</template>

<script>
  import getHex from './mixins/get-hex-info';

  export default {
    name: 'hex',
    mixins: [getHex],
    props: ['hexData'],
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
    stroke: #000;
    stroke-width: 2px;
  }

  .hex.hovered {
    fill: lemonchiffon;
  }

  .hex-number {
    fill: #aaa;
    font-size: 12px;
    text-anchor: middle;
  }

  .system-name {
    fill: #333;
    font-size: 10px;
    text-anchor: middle;
  }
</style>
