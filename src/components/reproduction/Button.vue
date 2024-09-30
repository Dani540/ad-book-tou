<!--/**
* Button component
* This component serves as a reusable button with an icon.
* It accepts a click handler function, an icon source, and an alt text for the icon.
*/-->

<script setup>
import { defineProps } from 'vue';

/**
 * Props for the Button component
 * @property {Function} click - The function to call when the button is clicked
 * @property {String} iconSrc - The source URL of the icon image
 * @property {String} alt - The alt text for the icon image
 */
const props = defineProps({
  click: Function,
  iconSrc: String,
  alt: String
});
</script>

<template>
  <button @click="click" class="svg-button">
    <!-- Icon image for the button -->
    <img :src="iconSrc" :alt="alt"/>
  </button>
</template>

<style scoped>
.svg-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.svg-button:hover {
  box-shadow: 0 0 10px rgba(119, 80, 87, 0.25);
}
</style>