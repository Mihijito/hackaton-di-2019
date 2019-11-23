<template>
  <div>
    <h1>Maze</h1>
    <div class="grid">
      <div v-for="(line, index) in this.lines" v-bind:key="index">
        <row :boxList="line"></row>
      </div>
    </div>
    <div class="button-mode">
      <button @click="chooseMode">
        {{ this.mode }}
      </button>
    </div>
  </div>
</template>

<script>
import * as mazeApi from '@/api/mazeApi';
import Row from '../components/Row';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Row
  },
  data: () => ({
    lines: [],
    beginner: 'beginner',
    advanced: 'advanced',
    switchMode: false
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
    },
    async chooseMode() {
      if (this.switchMode) {
        this.setMode(this.advanced);
      } else {
        this.setMode(this.beginner);
      }

      this.lines = await mazeApi.fetchMaze(this.mode);
      this.generateMaze(this.mode);
      this.switchMode = !this.switchMode;
    },
    ...mapActions('game', ['setMode'])
  },
  computed: {
    ...mapGetters('game', ['mode'])
  }
};
</script>

<style>
@import '../css/Maze.css';
</style>
