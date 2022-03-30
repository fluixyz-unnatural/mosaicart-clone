<template>
  <!-- 塩っ子 !-->
  <div class="shiokkoc">
    <transition name="hyoko" appear>
      <img
        v-show="isTate && showShiokko"
        src="@/assets/img/shiokko/8.png"
        id="kanban"
        class="leftbottom"
      />
    </transition>
    <transition name="hyoko" appear>
      <img
        v-show="!isTate && showShiokko"
        src="@/assets/img/shiokko/shiokkos.png"
        id="gundan"
        class="bottom"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "Shiokkos",
  props: {
    showShiokko: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const isTate = ref(false);
    const handleResize = () => {
      if (window.innerHeight > window.innerWidth) {
        isTate.value = true;
      } else {
        isTate.value = false;
      }
    };
    handleResize();
    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });
    return { isTate };
  },
});
</script>

<style scoped>
.shiokkoc {
  pointer-events: none;
}
#kanban {
  position: fixed;
  left: 0;
  bottom: 0;
  margin-left: -10px;
  margin-bottom: -10px;
  height: 20vh;
  width: auto;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
}
#gundan {
  position: fixed;
  left: 0;
  bottom: 0;
  margin-left: -10px;
  margin-bottom: -10px;
  width: 60vw;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
}
.hyoko-enter-from.bottom,
.hyoko-leave-to.bottom {
  transform: translateY(100%);
}
.hyoko-enter-from.leftbottom,
.hyoko-leave-to.leftbottom {
  transform: translateX(-100%) translateY(100%);
}
.hyoko-enter-active,
.hyoko-leave-active {
  transition: all 0.5s ease-out;
}
</style>
