<template>
  <div>
    v-bind="$attrs">
    <slot class="name-displayed"></slot>
  </div>
</template>

<script>
export default {
  name: 'PlayerNameDisplay'
};
</script>

<style>
@import '../css/PlayerNameDisplay.css';
</style>
