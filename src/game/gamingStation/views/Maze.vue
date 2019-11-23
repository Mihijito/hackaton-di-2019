<template>
  <div>
    <h1>Maze</h1>
    <div class="grid">
      <div v-for="(line, index) in this.lines" v-bind:key="index">
        <row :boxList="line"></row>
      </div>
    </div>
  </div>
</template>

<script>
import * as mazeApi from '@/api/mazeApi';
import Row from '../components/Row';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    Row
  },
  data: () => ({
    lines: []
  }),
  async created() {
    try {
      this.lines = await mazeApi.fetchMaze(this.mode);
      this.generateMaze(this.mode);
    } catch (e) {
      alert(e);
    }
  },
  methods: {
    generateMaze(modeMaze) {
      let loopLength;
      if (modeMaze === 'beginner') {
        loopLength = 5;
      } else if (modeMaze === 'advanced') {
        loopLength = 16;
      }

      for (let i = 0; i < loopLength; i++) {
        for (let j = 0; j < loopLength; j++) {
          let cell = document.createElement('div');
          cell.className = this.mode;
        }
      }
      console.log(loopLength);
    },
    chooseMode(mode) {
      this.setMode(mode);
    },
    ...mapActions('game', {
      setMode: 'setMode'
    })
  },
  computed: {
    ...mapGetters('game', ['mode'])
  }
};
</script>

<style>
@import '../css/Maze.css';
</style>
