/**
* Textfield component
* This component serves as an input field with a customizable placeholder.
*
* TODO: Update styles and expose input events for real-time filtering.
*/

<script setup>
/**
 * Props for the Textfield component
 * @property {String} placeholder - The placeholder text for the input field
 */
const props = defineProps({
  placeholder: String,
});
</script>

<template>
  <div class="input-background">
    <!-- Input field with a placeholder -->
    <input type="text" class="input" :placeholder="props.placeholder" />
  </div>
</template>

<style scoped>
.input-background {
  width: 259px;
  height: 40px;
  background: #1C000D;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.50);
}

.input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  padding-left: 10px;
}
</style>