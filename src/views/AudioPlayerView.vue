<script setup>
/**
 * ReproductorView component
 * This component serves as the audio player view with controls for play, pause, next, and previous.
 * @module ReproductorView
 */

import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useGlobalStore } from '@/stores/globalStore.js';
import meta from '@/assets/audio/meta.json';
import NextButton from "@/components/reproduction/Button.vue";
import PlayButton from "@/components/reproduction/PlayButton.vue";
import PrevButton from "@/components/reproduction/Button.vue";

import PrevIcon from '@/assets/svg/PrevButton.svg';
import NextIcon from '@/assets/svg/NextButton.svg';
import Button from "@/components/reproduction/Button.vue";
import BackIcon from "@/assets/svg/BackButton.svg";

const router = useRouter();
const globalStore = useGlobalStore();

/**
 * Index of the current song
 * @type {Number}
 */
const currentSongIndex = ref(globalStore.index);

/**
 * Volume of the audio
 * @type {Number}
 */
const volume = ref(globalStore.volume);

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
 * Reference to the audio player element
 * @type {Object}
 */
const audioPlayer = ref(null);

/**
 * Get the current song
 * @returns {Object|null} The current song object or null if out of range
 */
const currentSong = computed(() => {
  if (currentSongIndex.value >= 0 && currentSongIndex.value < meta.length) {
    return meta[currentSongIndex.value];
  }
  return null;
});

/**
 * Play the audio
 */
const playAudio = () => {
  if (audioPlayer.value) {
    audioPlayer.value.play();
  }
};

/**
 * Pause the audio
 */
const pauseAudio = () => {
  if (audioPlayer.value) {
    audioPlayer.value.pause();
  }
};

/**
 * Play the next song
 */
const nextSong = () => {
  if (currentSongIndex.value < meta.length - 1) {
    currentSongIndex.value++;
    playAudio();
  }
};

/**
 * Play the previous song or restart the current song if more than 10 seconds have passed
 */
const prevSong = () => {
  if (currentTime.value > 10) {
    updateCurrentTime(0);
  } else if (currentSongIndex.value > 0) {
    currentSongIndex.value--;
    playAudio();
  } else {
    updateCurrentTime(0);
  }
};

/**
 * Set the volume
 * @param {number} newVolume - The new volume level
 */
const setVolume = (newVolume) => {
  if (audioPlayer.value) {
    audioPlayer.value.volume = newVolume;
    volume.value = newVolume;
    globalStore.setVolume(newVolume);
  }
};

/**
 * Update the current time of the audio
 * @param {number} newTime - The new current time
 */
const updateCurrentTime = (newTime) => {
  if (audioPlayer.value) {
    audioPlayer.value.currentTime = newTime;
    currentTime.value = newTime;
  }
};

/**
 * Update the duration of the audio
 */
const updateDuration = () => {
  if (audioPlayer.value) {
    duration.value = audioPlayer.value.duration;
  }
};

onMounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.addEventListener('timeupdate', () => {
      currentTime.value = audioPlayer.value.currentTime;
    });
    audioPlayer.value.addEventListener('loadedmetadata', updateDuration);
    setVolume(globalStore.volume);
  }
});
</script>

<template>
  <div class="reproductor">
    <header class="header">
      <!-- Button to go back to the previous view -->
      <Button :click="router.back" :icon-src="BackIcon"/>
    </header>

    <div class="controls">
      <!-- Timeline slider for audio playback -->
      <input class="timeline" type="range" min="0" :max="duration" step="0.1" v-model="currentTime"
             @input="updateCurrentTime($event.target.value)"/>
      <!-- Volume slider for audio playback -->
      <input class="volume" type="range" min="0" max="1" step="0.01" v-model="volume"
             @input="setVolume($event.target.value)"/>
    </div>

    <section class="button-container">
      <!-- Button to play the previous song -->
      <PrevButton :click="prevSong" :icon-src="PrevIcon">Anterior</PrevButton>
      <!-- Play/Pause button -->
      <PlayButton :play="playAudio" :pause="pauseAudio"/>
      <!-- Button to play the next song -->
      <NextButton :click="nextSong" :icon-src="NextIcon" :disabled="currentSongIndex === meta.length - 1"/>
    </section>
    <!-- Audio element with source binding -->
    <audio ref="audioPlayer" :src="currentSong?.path"></audio>
  </div>
</template>

<style scoped>
.reproductor {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background-color: #0E0006;
  top: 0;
}

.controls {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
}

.timeline {
  width: 90%;
  margin: 0.5rem 0;
  background: #0E0006;
  border-radius: 5px;
  height: 1rem;
  -webkit-appearance: none;
}

.timeline::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.timeline::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.volume {
  writing-mode: bt-lr; /* IE */
  -webkit-appearance: slider-vertical; /* WebKit */
  width: 10px;
  height: 150px;
  background: #0E0006;
  border-radius: 5px;
  position: fixed;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.volume::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.volume::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.button-container {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background-color: #0E0006;
  bottom: 0;
}

button {
  margin: 0.5rem;
}
</style>