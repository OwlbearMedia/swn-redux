<template>
  <svg class="chart-container">
    <template v-for="route in chart.drillRoutes">
      <line
        :x1="getPoint(hexes[route.pointA].x)"
        :y1="getPoint(hexes[route.pointA].y)"
        :x2="getPoint(hexes[route.pointB].x)"
        :y2="getPoint(hexes[route.pointB].y)"
        stroke-width="2"
        :stroke="chart.color"
      ></line>
    </template>
  </svg>
</template>

<script>
  export default {
    name: 'chart',
    props: ['chart', 'hexes', 'radius'],
    methods: {
      getPoint(point) {
        return point + this.radius;
      },
    },
  };
</script>
