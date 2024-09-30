<!--
/**
* AudioPlayer component
* This component serves as an audio player with controls for play, pause, volume, and time updates.
*/
-->

<script setup>
import { ref, defineExpose, onMounted } from 'vue';

/**
 * Props for the AudioPlayer component
 * @property {String} audioSrc - The source URL of the audio file
 */
const props = defineProps({
  audioSrc: {
    type: String,
    required: true
  }
});

/**
 * Reference to the audio element
 * @type {Object}
 */
const audio = ref(null);

/**
 * Volume of the audio
 * @type {Number}
 */
const volume = ref(1);

/**
 * Current time of the audio playback
 * @type {Number}
 */
const currentTime = ref(0);

/**
 * Duration of the audio
 * @type {Number}
 */
const duration = ref(0);

/**
 * Play the audio
 */
const playAudio = () => {
  if (audio.value) {
    audio.value.play();
  }
};

/**
 * Pause the audio
 */
const pauseAudio = () => {
  if (audio.value) {
    audio.value.pause();
  }
};

/**
 * Set the volume of the audio
 * @param {Number} newVolume - The new volume level
 */
const setVolume = (newVolume) => {
  if (audio.value) {
    audio.value.volume = newVolume;
    volume.value = newVolume;
  }
};

/**
 * Update the current time of the audio playback
 * @param {Number} newTime - The new current time
 */
const updateCurrentTime = (newTime) => {
  if (audio.value) {
    audio.value.currentTime = newTime;
    currentTime.value = newTime;
  }
};

/**
 * Update the duration of the audio
 */
const updateDuration = () => {
  if (audio.value) {
    duration.value = audio.value.duration;
  }
};

onMounted(() => {
  if (audio.value) {
    audio.value.addEventListener('timeupdate', () => {
      currentTime.value = audio.value.currentTime;
    });
    audio.value.addEventListener('loadedmetadata', updateDuration);
  }
});

defineExpose({
  playAudio,
  pauseAudio,
  setVolume,
  updateCurrentTime,
  duration,
  currentTime,
  volume
});
</script>

<template>
  <!-- Audio element with source binding -->
  <audio ref="audio" :src="audioSrc"></audio>
</template>