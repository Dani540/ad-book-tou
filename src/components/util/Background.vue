<!--
/**
* Background component
* This component serves as a fixed background image for the application.
*/
-->

<script setup>

</script>

<template>
  <div class="background">
    <!-- Background image -->
    <img alt="Background_v2" src="../../assets/Background_v2.png" />
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>