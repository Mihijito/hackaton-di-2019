<template>
  <div class="list-displayer">
    <div v-for="(label, index) in list" v-bind:key="index">
      <div>
        <span>
          <slot></slot>
          <span class="label">
            {{ label }}
          </span>
        </span>
      </div>
      <div class="element">
        <div class="outline" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListDisplayer',
  props: {
    list: {
      type: Array,
      require: true
    }
  }
};
</script>

<style>
@import '../css/ListDisplayer.css';
</style>
