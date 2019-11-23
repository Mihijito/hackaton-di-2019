<template>
  <div class="dashboard">
    <div>Whatsup</div>
    <p id="demo"></p>
    <button id="addStar" v-on:click="addStar">BD call</button>
    <command-display></command-display>
  </div>
</template>

<script>
import CommandDisplay from '../components/CommandsDisplay';
import Firebase from '../components/firebase/firebase';

export default {
  name: 'Dashboard',
  components: {
    CommandDisplay
  },
  methods: {
    addStar() {
      Firebase.addStar();
    }
  }
};
</script>

<style>
@import '../scss/Dashboard.css';
</style>
