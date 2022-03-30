<template>
  <svg class="bg" width="320" height="180" :viewBox="viewBoxString">
    <image
      :width="imageWidth"
      :height="imageHeight"
      :href="
        'https://shion-dev.s3.ap-northeast-1.amazonaws.com/images/tgt/' + image
      "
    />
    <rect
      :x="absX"
      :y="absY"
      :width="viewBoxWidth"
      :height="viewBoxHeight"
      stroke="#ffffff"
      :stroke-width="3 * (imageWidth / 320)"
      fill="none"
      class="reverse"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "MiniMap",
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
  setup(props) {
    const show = ref(true);
    console.log(props);
    const viewBoxString = computed(() => {
      return "0,0," + props.imageWidth + "," + props.imageHeight;
    });
    return { show, props, viewBoxString };
  },
  methods: {
    del() {
      this.$emit("deleteModal");
    },
  },
});
</script>

<style scoped>
.bg {
  width: 32vw;
  height: 18vw;
  max-width: 320px;
  max-height: 180px;
}
.reverse {
  mix-blend-mode: difference;
}
</style>
