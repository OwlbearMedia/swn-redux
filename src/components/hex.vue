<template>
  <svg class="hex-container" :x="hexData.x" :y="hexData.y" style="width: '90px'">
    <polygon class="hex" :points="hexPoints(hexData.radius)"></polygon>
    <text :x="hexData.radius" y="75">
      {{ getHexNumber }}
    </text>
  </svg>
</template>

<script>
  export default {
    name: 'hex',
    props: ['hexData'],
    computed: {
      getHexNumber() {
        function pad(n) {
          return (n < 10) ? (`0${n}`) : n;
        }

        return pad(this.hexData.column) + pad(this.hexData.row);
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
    },
  };
</script>

<style scoped>
  .hex {
    fill: transparent;
    stroke: #000;
    stroke-width: 2px;
  }

  text {
    fill: #aaa;
    font-size: 12px;
    text-anchor: middle;
  }
</style>
