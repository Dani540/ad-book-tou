<script setup>
import Background from "@/components/util/Background.vue";
import Upper from "@/components/upper_context/Upper.vue";
import CardDisplay from "@/components/central/CardDisplay.vue";
</script>

<template>
  <Background />
  <RouterView />
</template>

<style scoped>
img{
  position: fixed;
  z-index: -10;
}

.wrapper{
  margin-block: 2rem;
}
</style>
