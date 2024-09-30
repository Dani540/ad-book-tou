<!--
/**
* HomeView component
* This component serves as the main view displaying the header and card display.
*/
-->

<script setup>
import CardDisplay from "@/components/central/CardDisplay.vue";
import Upper from "@/components/upper_context/Upper.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- Upper component for the header -->
      <Upper />
    </div>
  </header>
  <main>
    <div class="wrapper">
      <!-- CardDisplay component for displaying cards -->
      <CardDisplay />
    </div>
  </main>
</template>

<style scoped>

</style>