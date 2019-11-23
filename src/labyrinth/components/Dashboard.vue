<template>
  <div class="dashboard">
    Whatsup
    <p id="demo"></p>
    <button onclick="lookUpDb()">BD call</button>
  </div>
</template>

<script>
import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

export default {
  name: 'Dashboard'
};

</script>

<style>
@import '../scss/Dashboard.scss';
@import '/src/scss/Variables.scss';
</style>
