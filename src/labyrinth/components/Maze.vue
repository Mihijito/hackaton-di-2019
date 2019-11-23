<template>
  <div>
    <h1>Maze</h1>
    <div>
      <v-for value in values>
        {value}
      </v-for>
    </div>
  </div>
</template>

<script>
import * as api from '../../api/labyrinthApi';

export default {
  data: () => ({
    values: []
  }),
  async created() {
    this.values = api.getMaze();
  }
};
</script>
