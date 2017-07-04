<template>
  <circle
    :cx="center"
    :cy="center"
    :r="radius"
    :fill="color">
  </circle>
</template>

<script>
  export default {
    name: 'star',
    props: ['center', 'star'],
    computed: {
      radius() {
        const defaultSize = 5;
        const max = 15;
        const radius = this.star ? defaultSize * this.star.radius : defaultSize;

        return radius > max ? 15 : radius;
      },

      color() {
        const spectralType = this.star ? this.star.type[0] : 'G';
        const starColors = {
          O: '#9BB0FF',
          B: '#AABFFF',
          A: '#CAD8FF',
          F: '#FBF8FF',
          G: '#FCD440',
          K: '#FF9833',
          M: '#FF3B01',
        };

        return starColors[spectralType];
      },
    },
  };
</script>
