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
import { mapGetters } from 'vuex';

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
      let borders = this.mode + ' ';
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
  },
  computed: {
    ...mapGetters('game', ['mode'])
  }
};
</script>

<style>
@import '../css/Row.css';
</style>
