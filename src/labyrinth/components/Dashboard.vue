<template>
  <div class="dashboard">
    <command-display></command-display>
  </div>
</template>

<script>
import CommandDisplay from '../components/CommandsDisplay';

export default {
  name: 'Dashboard',
  components: {
    CommandDisplay
  }
};
</script>

<style>
@import '../scss/Dashboard.css';
</style>
