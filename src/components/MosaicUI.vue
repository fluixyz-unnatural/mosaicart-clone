<template>
  <div>
    <!-- left top !-->
    <router-link to="/?skip=true">
      <img src="@/assets/img/mosaic/lefttop.png" class="lefttop" />
    </router-link>
    <img src="@/assets/img/mosaic/rightbottom.png" class="rightbottom" />
    <div
      class="rbContainer"
      v-touch:tap="toggleOriginal"
      @mouseenter="hintOn"
      @mouseleave="hintOff"
    >
      <Minimap
        class="minimap"
        :imageWidth="imageWidth"
        :imageHeight="imageHeight"
        :absX="absX"
        :absY="absY"
        :viewBoxWidth="viewBoxWidth"
        :viewBoxHeight="viewBoxHeight"
        :image="image"
      />
      <tap-mark class="center" v-show="enableTap" />
    </div>
    <div class="hint" v-show="showHint">
      {{ $t("mosaicAndIllustSwitchHint") }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Minimap from "@/components/MiniMap.vue";
import TapMark from "@/components/TapMark.vue";

export default defineComponent({
  name: "MosaicUI",
  components: { Minimap, TapMark },
  props: {
    imageWidth: {
      type: Number,
      default: 320,
    },
    imageHeight: {
      type: Number,
      default: 320,
    },
    absX: {
      type: Number,
      default: 10,
    },
    absY: {
      type: Number,
      default: 10,
    },
    viewBoxWidth: {
      type: Number,
      default: 50,
    },
    viewBoxHeight: {
      type: Number,
      default: 50,
    },
    image: {
      type: String,
      default: "",
    },
  },
  emits: ["toggleOriginal"],
  setup(props, context) {
    const showMenu = ref(false);
    const showHint = ref(false);
    const enableTap = ref(true);
    const toggleOriginal = () => {
      context.emit("toggleOriginal");
      enableTap.value = false;
    };
    let timeout = 0;
    const hintOn = () => {
      showHint.value = true;
      timeout++;
      setTimeout(() => {
        if (timeout == 1) showHint.value = false;
        else timeout--;
      }, 2000);
    };
    const hintOff = () => {
      showHint.value = false;
    };
    return { showMenu, toggleOriginal, showHint, hintOn, hintOff, enableTap };
  },
});
</script>

<style scoped>
div {
  user-select: none;
}
.lefttop {
  position: fixed;
  top: -1px;
  left: 0;
  width: 33vw;
  min-width: 300px;
  height: auto;
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
}
.rightbottom {
  position: fixed;
  bottom: -1px;
  right: 0;
  width: 33vw;
  min-width: 300px;
  height: auto;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
}
.rbContainer {
  position: fixed;
  display: block;
  bottom: -1px;
  right: 0;
  width: 22.5vw;
  min-width: 205px;
  height: 10.2vw;
  min-height: 92px;
}
.minimap {
  position: absolute;
  inset: 0;
  margin: auto;
  height: 90%;
  width: 90%;
  cursor: pointer;
}
.inline {
  display: inline;
}
.hint {
  position: fixed;
  display: block;
  width: 320px;
  bottom: 10vw;
  right: 10vw;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  pointer-events: none;
}
.center {
  position: absolute;
  inset: 0;
  margin: auto;
}
</style>
