<!--
/**
* Upper component
* This component serves as a header with a search input field.
* It handles opening and closing based on click events inside and outside the component.
*
* TODO: Implement real-time filtering functionality from the textfield to the card display.
*/
-->

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Textfield from "@/components/header_context/Textfield.vue";

/**
 * State to track if the container is open
 * @type {Boolean}
 */
const isOpen = ref(false);

/**
 * Handle click outside the container to close it
 * @param {Event} event - The click event
 */
const handleClickOutside = (event) => {
  const container = document.querySelector('.container');
  if (container && !container.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

/**
 * Handle click inside the container to open it
 */
const handleClickInside = () => {
  isOpen.value = true;
};
</script>

<template>
  <div class="container" :class="isOpen ? 'open' : 'closed'" @click="handleClickInside">
    <!-- Background of the header -->
    <div class="header-background"></div>
    <!-- Main title of the header -->
    <div class="main-title">A library to u</div>
    <!-- Subtitle of the header -->
    <div class="sub-title">Search:</div>
    <!-- Input field for search -->
    <div class="input-container">
      <Textfield placeholder="Search for a " />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  left: 10%;
  box-shadow: 0 0 22px rgba(119, 80, 87, 0.25);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 10;
}

.container.open {
  top: 0;
  animation: scrollToDown 0.5s forwards;
}

.container.closed {
  top: 0;
  animation: scrollToUp 0.5s forwards;
}

@keyframes scrollToDown {
  0% {
    transform: translateY(-80%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes scrollToUp {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-80%);
  }
}

.header-background {
  width: 315px;
  height: 200px;
  background: #0E0006;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.main-title {
  position: absolute;
  left: 80px;
  top: 28px;
  text-align: center;
  color: white;
  font-size: 24px;
  font-family: 'Inria Serif';
  font-weight: 400;
  text-decoration: underline;
  text-transform: capitalize;
  word-wrap: break-word;
}

.sub-title {
  position: absolute;
  left: 126px;
  top: 74px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-family: 'Inria Serif';
  font-weight: 400;
  text-transform: capitalize;
  word-wrap: break-word;
}

.input-container {
  width: 259px;
  height: 40px;
  position: absolute;
  left: 28px;
  top: 108px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
</style>