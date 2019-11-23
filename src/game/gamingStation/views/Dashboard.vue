<template>
  <div class="dashboard">
    <div>Whatsup</div>
    <p id="demo"></p>
    <button id="addStar" v-on:click="addAStar">BD call</button>
    <command-display></command-display>
    <online-player-display></online-player-display>
  </div>
</template>

<script>
import CommandDisplay from '../components/CommandsDisplay';
import { addStar } from '@/labyrinth/components/firebase/firebase';
import OnlinePlayerDisplay from '../components/OnlinePlayerDisplay';

export default {
  name: 'Dashboard',
  components: {
    CommandDisplay,
    OnlinePlayerDisplay
  },
  methods: {
    addAStar() {
      console.log('this is  clale');
      addStar();
    }
  }
};
</script>

<style>
@import '../css/Dashboard.css';
</style>
