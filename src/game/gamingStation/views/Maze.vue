<template>
  <div>
    <h1>Maze</h1>
    <div v-for="value in values" v-bind:key="value">
      {value}
    </div>
  </div>
</template>

<script>
import * as api from '@/api/labyrinthApi';

export default {
  data: () => ({
    values: []
  }),
  async created() {
    this.values = api.getMaze();
  }
};
</script>
