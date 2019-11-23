<template>
  <div>
    <h1>Maze</h1>
    <div class="grid" v-for="(line, index) in this.lines" v-bind:key="line">
      <row :boxList="line[index]"></row>
    </div>
  </div>
</template>

<script>
import * as mazeApi from '@/api/mazeApi';
import Row from '../components/Row';

export default {
  components: {
    Row
  },
  data: () => ({
    lines: [],
    mode: '',
    firstIndex: 0
  }),
  async created() {
    try {
      this.lines = await mazeApi.fetchMaze();
      this.generateMaze(this.mode);
    } catch (e) {
      alert(e);
    }
  },
  methods: {
    generateMaze(mode) {
      let loopLength;
      if (mode === 'beginner') {
        loopLength = 5;
      }

      for (let i = 0; i < loopLength; i++) {
        for (let j = 0; j < loopLength; j++) {
          let cell = document.createElement('div');
          cell.className = 'box';
        }
      }
    }
  }
};
</script>
