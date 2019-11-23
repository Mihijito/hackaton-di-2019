<template>
  <div class="container">
    <div class="command-display">
      <div class="command">
        <div>
          UP
        </div>
        <i class="fas fa-arrow-up"></i>
      </div>
      <div class="command">
        <div>
          LEFT
          <i class="fas fa-arrow-left"></i>
          <span>
            MOVE
          </span>
          <i class="fas fa-arrow-right"></i>
          RIGHT
        </div>
      </div>
      <div class="command">
        <i class="fas fa-arrow-down"></i>
        <div>
          DOWN
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommandDisplay'
};
</script>

<style>
@import '../scss/CommandDisplay.css';
</style>
