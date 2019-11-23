<template>
  <div>
    <div>
      Whatup
    </div>
    <Maze></Maze>
    <Dashboard></Dashboard>
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard.vue';
import Maze from '../components/Maze.vue';

export default {
  name: 'Labyrinth',
  components: {
    Dashboard,
    Maze
  }
};
</script>

<style>
@import '/src/scss/Variables.scss';
</style>
