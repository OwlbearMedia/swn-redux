<template>
  <div>
    <input v-if="isEditing" v-model="data" type="text" @keydown="handleKeys($event)"/>
    <div v-else class="text" @click="edit($event)">{{ data }}<span class="flaticon-edit"></span></div>
  </div>
</template>

<script>
  import * as _ from 'lodash';

  export default {
    props: ['text', 'path'],
    data() {
      return {
        // There should ever only be one slot so we can just access it at index 0
        data: this.$slots.default[0].text,
        isEditing: false,
      };
    },
    methods: {
      edit(event) {
        event.preventDefault();
        this.isEditing = true;
      },
      handleKeys(event) {
        // If it's the enter key
        if (event.keyCode === 13) {
          this.saveData();
        // If it's the enter key
        } else if (event.keyCode === 27) {
          this.isEditing = false;
        }
      },
      saveData() {
        const sectorData = _.set(this.$store.state.sector, this.path, this.data);

        this.isEditing = false;
        this.$store.dispatch('updateSector', sectorData);
      },
    },
  };
</script>

<style scoped>
  .flaticon-edit {
    display: none;
  }

  .flaticon-edit:before {
    font-size: 14px;
  }

  .text {
    cursor: pointer;
    position: relative;
  }

  .text:hover .flaticon-edit {
    display: inline;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
