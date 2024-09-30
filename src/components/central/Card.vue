<!--
/**
 * Card component
 * @module Card
 * This component serves as a presentation card for the audios to be played.
 * It contains the metadata of the audios (artist, duration, etc.),
 * and works by storing the song index globally before switching to the player screen.
 */
-->

<script setup>
import router from "@/router/index.js";
import { useGlobalStore } from "@/stores/globalStore.js";

/**
 * Props for the Card component
 * @property {String} title - The title of the audio
 * @property {String} description - The description or artist of the audio
 * @property {String} time - The duration of the audio
 * @property {String} background - The background image or color for the card
 * @property {Number} audioIndex - The index of the audio in the global store
 */
const props = defineProps({
  title: String,
  description: String,
  time: String,
  background: String,
  audioIndex: Number
});

/**
 * Handle card click event
 * Stores the audio index globally and navigates to the player screen
 */
const handleCardClick = () => {
  useGlobalStore().setIndex(props.audioIndex);
  router.push("/play");
};
</script>

<template>
  <div class="container" @click="handleCardClick">
    <!-- Background of the card -->
    <div class="background"></div>
    <!-- Separator line in the card -->
    <div class="separator"></div>
    <!-- Display the duration of the audio -->
    <div class="time-display">{{ time }}</div>
    <!-- Display the title and description of the audio -->
    <div class="description">
      {{title}}<br />
      {{description}}
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  width: auto;
}

.container:hover {
  box-shadow: 0 0 10px rgba(119, 80, 87, 0.25);
}

.background {
  width: 238px;
  height: 268px;
  background: #0E0006;
}

.separator {
  width: 238px;
  height: 4px;
  position: absolute;
  background: white;
  top: 220px;
}

.time-display {
  position: absolute;
  top: 236px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-family: 'Inria Serif';
  font-weight: 400;
  text-transform: capitalize;
  word-wrap: break-word;
}

.description {
  width: 188px;
  height: 169px;
  position: absolute;
  top: 28px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-family: 'Inria Serif';
  font-weight: 400;
  text-transform: capitalize;
  word-wrap: break-word;
}
</style>