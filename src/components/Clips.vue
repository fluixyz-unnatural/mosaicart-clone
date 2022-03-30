<!-- クリックイベントを取るために、画像を予めバラバラにしておき組み上げる !-->
<template>
  <div class="container">
    <div v-for="layer in clips" :key="layer">
      <router-link v-if="isLocal(layer)" :to="img2path(layer)">
        <img
          :src="require('@/assets/img/clips/' + layer)"
          :style="compositStyle(layer)"
          :class="compositClass(layer)"
          :id="layer"
        />
      </router-link>
      <a v-else :href="img2path(layer)">
        <img
          :src="require('@/assets/img/clips/' + layer)"
          :style="compositStyle(layer)"
          :class="compositClass(layer)"
          :id="layer"
          target="_blank"
          ref="noopener noreferrer"
        />
      </a>
    </div>
    <TapMark class="center" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import clipsData from "@/assets/img/clips/clips.json";
import TapMark from "@/components/TapMark.vue";
export default defineComponent({
  name: "Clips",
  components: { TapMark },
  props: {
    showSticker: {
      type: Boolean,
      default: true,
    },
    showIconMemo: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const locale = "JA";
    const language =
      (window.navigator.languages && window.navigator.languages[0]) ||
      window.navigator.language;
    const clips = computed(() => {
      let clips = [];
      if (language.match("ja")) {
        clips = [
          "Bg.png",
          "Multiply.png",
          "StickerShadow.png",
          "Snaps.png",
          "FansiteSticker_JA.png",
          "MessagesSticker_JA.png",
          "CreditSticker_JA.png",
          "MemoShadow.png",
          "IconMemo.png",
          "Youtube.png",
          "Twitter.png",
          "Main.png",
          "Overlay.png",
        ];
      } else {
        clips = [
          "Bg.png",
          "Multiply.png",
          "StickerShadow.png",
          "Snaps.png",
          "FansiteSticker_EN.png",
          "MessagesSticker_EN.png",
          "CreditSticker_EN.png",
          "MemoShadow.png",
          "IconMemo.png",
          "Youtube.png",
          "Twitter.png",
          "Main.png",
          "Overlay.png",
        ];
      }
      if (!props.showSticker) {
        clips = clips.filter((elm) => {
          return !elm.includes("Sticker");
        });
      }
      if (!props.showIconMemo) {
        clips = clips.filter((elm) => {
          return !(
            elm.includes("Icon") ||
            elm.includes("Twitter") ||
            elm.includes("Youtube") ||
            elm.includes("Memo")
          );
        });
      }

      return clips;
    });
    // eslint-disable-next-line
    const imgData: any = clipsData;
    const compositStyle = (layer: string) => {
      return `margin-left: ${imgData[layer].x1}px; margin-top: ${imgData[layer].y1}px ;`;
    };
    const compositClass = (layer: string) => {
      let out = "absTL";
      const cl: string = imgData[layer].class as string;
      if (cl.match("multiply")) {
        out += " multiply";
      }
      if (cl.match("clickable")) {
        out += " clickable";
      }
      if (cl.match("overlay")) {
        out += " overlay";
      }
      if (cl.match("unclickable")) {
        out += " event-none";
      }
      if (cl.match("drop-shadow")) {
        out += " drop-shadow";
      }
      return out;
    };
    const img2path = (img: string) => {
      if (img.match("Main")) return "/mosaic";
      if (img.match("Fansite")) return "https://shionchan.fan";
      if (img.match("Message")) return "/messages";
      if (img.match("Credit")) return "/credit";
      if (img.match("Twitter")) return "http://twitter.com/murasakishionch";
      if (img.match("Youtube"))
        return "http://www.youtube.com/channel/UCXTpFs_3PqI41qX2d9tL2Rw?sub_confirmation=1";
      return "/";
    };
    const isLocal = (img: string) => {
      if (img.match("Main")) return true;
      if (img.match("Fansite")) return false;
      if (img.match("Message")) return true;
      if (img.match("Credit")) return true;
      if (img.match("Twitter")) return false;
      if (img.match("Youtube")) return false;
    };
    return {
      locale,
      clips,
      compositStyle,
      compositClass,
      img2path,
      isLocal,
    };
  },
});
</script>

<style scoped>
.center {
  position: fixed;
  inset: 0;
  margin: auto;
}
.container {
  position: relative;
  width: 1920px;
  height: 1080px;
  color: white;
  transform-origin: left top;
}
.clickable {
  cursor: pointer;
  overflow: hidden;
}
.absTL {
  position: absolute;
  top: 0;
  left: 0;
}
.blendMultiply {
  mix-blend-mode: multiply;
}
.multiply {
  mix-blend-mode: multiply;
}
.overlay {
  mix-blend-mode: overlay;
}
.event-none {
  pointer-events: none;
}
.drop-shadow {
  filter: drop-shadow(15px 15px 1px rgba(0, 0, 0, 0.5));
}
</style>
