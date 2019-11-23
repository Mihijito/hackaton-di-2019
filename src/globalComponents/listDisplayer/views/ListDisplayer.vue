<template>
  <div class="list-displayer">
    <div v-for="(label, index) in list" v-bind:key="index">
      <div>
        <span>
          <span>
            <slot></slot>
          </span>
          <span class="label">
            {{ label }}
          </span>
        </span>
        <div class="element">
          <div class="outline" />
        </div>
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
