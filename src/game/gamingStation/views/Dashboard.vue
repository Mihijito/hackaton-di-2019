<template>
  <div class="dashboard">
    <command-display></command-display>
    <online-player-display></online-player-display>
  </div>
</template>

<script>
import CommandDisplay from '../components/CommandsDisplay';
import OnlinePlayerDisplay from '../components/OnlinePlayerDisplay';

export default {
  name: 'Dashboard',
  components: {
    CommandDisplay,
    OnlinePlayerDisplay
  }
};
</script>

<style>
@import '../css/Dashboard.css';
</style>
