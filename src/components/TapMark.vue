<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="tapHint"
    fill="#dddddd"
    viewBox="0 0 50 50"
    stroke="white"
    stroke-width="3px"
    width="100"
    height="100"
  >
    <circle r="12" cx="50%" cy="50%"></circle>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TapMark",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.tapHint {
  opacity: 0.2;
  animation: 2s ease-in 1s infinite tap;
  pointer-events: none;
}
@keyframes tap {
  0% {
    opacity: 0.7;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
