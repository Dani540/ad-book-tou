<!--/**
* CardDisplay component
* This component serves as a wrapper for the cards, separating the responsibilities
* of presenting the cards from managing their group movement.
*/-->

<script setup>
import { ref, onMounted } from 'vue';
import Card from "@/components/central/Card.vue";
import meta from '@/assets/audio/meta.json';

/**
 * Array of songs metadata
 * @type {Array<Object>}
 */
const songs = ref([]);

/**
 * Fetch songs metadata on component mount
 */
onMounted(() => {
  songs.value = meta;
});
</script>

<template>
  <div class="card-display">
    <!-- Loop through the songs and create a Card component for each song -->
    <Card
        v-for="(song, index) in songs"
        :key="index"
        :audio-index="index"
        :title="song.song"
        :description="song.artist"
        :time="song.duration"
        :audio-src="song.path"
    />
  </div>
</template>

<style scoped>
.card-display {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.card-display > * {
  margin: 2rem;
}
</style>