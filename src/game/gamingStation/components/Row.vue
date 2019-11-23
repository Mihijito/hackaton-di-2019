<template>
  <div class="row">
    <span v-for="box in this.boxList" v-bind:key="box">
      <div class="box"></div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    boxList: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
@import '../css/Row.css';
</style>
