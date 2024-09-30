<!--/**
* PlayButton component
* This component serves as a play/pause button for audio playback.
* It toggles between play and pause states and calls the respective functions.
*/
-->
<script setup>
import { ref } from 'vue';
import PlayIcon from '@/assets/svg/PlayButton.svg';
import PauseIcon from '@/assets/svg/PauseButton.svg';

/**
 * Props for the PlayButton component
 * @property {Boolean} isPlaying - The initial playing state of the audio
 * @property {Function} play - The function to call to play the audio
 * @property {Function} pause - The function to call to pause the audio
 */
const props = defineProps({
  isPlaying: Boolean,
  play: Function,
  pause: Function,
});

/**
 * State of the PlayButton component
 * @property {Boolean} isPlaying - The current playing state of the audio
 */
const state = ref({
  isPlaying: props.isPlaying
});

/**
 * Toggle the play/pause state and call the respective function
 */
const toggle = () => {
  state.value.isPlaying = !state.value.isPlaying;
  state.value.isPlaying ? props.play() : props.pause();
};
</script>

<template>
  <button @click="toggle" class="svg-button">
    <!-- Display play icon if not playing -->
    <img v-if="!state.isPlaying" :src="PlayIcon" alt="Play"/>
    <!-- Display pause icon if playing -->
    <img v-if="state.isPlaying" :src="PauseIcon" alt="Pause"/>
  </button>
</template>

<style scoped>
.svg-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
</style>