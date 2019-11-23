<template>
  <div class="player-display">
    <liste-displayer :list="this.players">
      <i class="fas fa-user"></i>
    </liste-displayer>
  </div>
</template>

<script>
import ListeDisplayer from '@/globalComponents/listDisplayer/views/ListDisplayer';

export default {
  name: 'OnlinePlayerDisplay',
  components: {
    ListeDisplayer
  },
  data: () => ({
    players: [
      'Hughes Soares',
      'Tristan Ortiz',
      'Justin Audet',
      'Olivier Gamache'
    ]
  })
};
</script>

<style>
@import '../css/OnlinePlayerDisplay.css';
</style>
