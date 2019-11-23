<template>
  <div class="row">
    <div v-for="(box, index) in this.boxList" v-bind:key="index">
      <span>
        <div :class="getBoxClass(box)"></div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    boxList: {
      type: Array,
      required: true
    }
  },
  methods: {
    getBoxClass(box) {
      let borders = 'box ';
      if (!box.top) {
        borders = borders + 'up ';
      }

      if (!box.left) {
        borders = borders + 'left ';
      }

      if (!box.right) {
        borders = borders + 'right ';
      }

      if (!box.bottom) {
        borders = borders + 'down';
      }
      return borders;
    }
  }
};
</script>

<style>
@import '../css/Row.css';
</style>
