/**
* Title component
* This component serves as a header title with customizable text.
*/

<script setup>
import { ref } from "vue";

/**
 * Props for the Title component
 * @property {String} title - The text to display as the title
 */
const props = defineProps({
  title: String
});

/**
 * Reactive title text
 * @type {String}
 */
const title = ref(props.title);
</script>

<template>
  <!-- Header title -->
  <h1>{{title}}</h1>
</template>

<style scoped>
h1 {
  color: #FFFFFF;
  font-size: 2em;
  margin: 0;
  padding: 0;
}
</style>