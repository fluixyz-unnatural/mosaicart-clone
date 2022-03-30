<template>
  <div class="bg">
    <!-- ↓動画↓ !-->
    <video
      @error="videoError"
      muted="muted"
      playsinline
      ref="video"
      src="https://shion-dev.s3.ap-northeast-1.amazonaws.com/videos/room.mp4"
      type="video/mp4"
      :style="fullscreenStyle"
      @canplaythrough="canplaythrough = true"
      preload
    />
    <!-- ↓ボード表示↓ !-->
    <transition name="fade">
      <Clips
        v-show="showImages"
        :style="fullscreenTransform"
        :showSticker="!isStickerOvered"
        :showIconMemo="!isIconMemoOvered"
      />
    </transition>
    <div class="memoc">
      <transition name="fade">
        <img
          src="@/assets/img/clips/IconMemo.png"
          class="memo dropshadow base"
          v-if="isIconMemoOvered && showImages"
        />
      </transition>
      <a
        href="http://twitter.com/murasakishionch"
        target="_blank"
        ref="noopener noreferrer"
      >
        <transition name="fade">
          <img
            src="@/assets/img/clips/Twitter.png"
            class="memo icon"
            :style="`margin-left:${twitterPadding.right}px; margin-bottom:${twitterPadding.bottom}px; width:${twitterPadding.width}px`"
            v-if="isIconMemoOvered && showImages"
          />
        </transition>
      </a>
      <a
        target="_blank"
        ref="noopener noreferrer"
        href="http://www.youtube.com/channel/UCXTpFs_3PqI41qX2d9tL2Rw?sub_confirmation=1"
      >
        <transition name="fade">
          <img
            src="@/assets/img/clips/Youtube.png"
            class="memo icon"
            :style="`margin-left:${tubePadding.right}px; margin-bottom:${tubePadding.bottom}px; width:${tubePadding.width}px;`"
            v-if="isIconMemoOvered && showImages"
          />
        </transition>
      </a>
    </div>
    <div class="en-sticker" v-if="!isJa">
      <router-link to="/messages">
        <transition name="fade">
          <img
            src="@/assets/img/clips/MessagesSticker_EN.png"
            class="sticker middle dropshadow"
            v-if="isStickerOvered && showImages"
          />
        </transition>
      </router-link>
      <a href="https://shionchan.fan">
        <transition name="fade">
          <img
            src="@/assets/img/clips/FansiteSticker_EN.png"
            class="sticker top dropshadow"
            v-if="isStickerOvered && showImages"
          />
        </transition>
      </a>
      <router-link to="credit">
        <transition name="fade">
          <img
            src="@/assets/img/clips/CreditSticker_EN.png"
            class="sticker bottom dropshadow"
            v-if="isStickerOvered && showImages"
          />
        </transition>
      </router-link>
    </div>
    <div class="ja-sticker" v-else>
      <router-link to="/messages">
        <transition name="fade">
          <img
            src="@/assets/img/clips/MessagesSticker_JA.png"
            class="sticker middle dropshadow"
            v-if="isStickerOvered && showImages"
          />
        </transition>
      </router-link>
      <a href="https://shionchan.fan">
        <transition name="fade">
          <img
            src="@/assets/img/clips/FansiteSticker_JA.png"
            class="sticker top dropshadow"
            v-if="isStickerOvered && showImages"
          />
        </transition>
      </a>
      <router-link to="credit">
        <transition name="fade">
          <img
            src="@/assets/img/clips/CreditSticker_JA.png"
            class="sticker bottom dropshadow"
            v-if="isStickerOvered && showImages"
          />
        </transition>
      </router-link>
    </div>
    <img src="@/assets/img/Logo.png" class="logo" />
    <fullscreen-loading v-show="showLoading" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from "vue";
import FullscreenLoading from "@/components/FullscreenLoading.vue";
import Clips from "@/components/Clips.vue";
import clips from "@/assets/img/clips/clips.json";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Home",
  components: { FullscreenLoading, Clips },
  setup() {
    const preventWheel = ref(false);
    const showAnnotation = ref(false);
    const showLoading = ref(true);
    const canplaythrough = ref(false); // 動画が再生可能かどうかのフラグ
    const showImages = computed(() => page.value == 1 && !preventWheel.value);
    const page = ref(0);
    const language =
      (window.navigator.languages && window.navigator.languages[0]) ||
      window.navigator.language;
    // eslint-disable-next-line
    const clipsData: any = clips;
    const isJa = language.match("ja");
    // ページを捲る処理
    const onWheelPaging = (e: WheelEvent) => {
      if (e.deltaY > 0) paging(1);
      else paging(-1);
    };
    const onSwipePaging = (e: string) => {
      if (e == "top") paging(1);
      else if (e == "bottom") paging(-1);
    };
    const paging = (deltaP: number) => {
      if (preventWheel.value) return;
      showAnnotation.value = false;
      if (deltaP > 0) page.value += deltaP;
      else {
        page.value += deltaP;
        preventWheel.value = true;
        setTimeout(() => (preventWheel.value = false), 1000);
      }
      if (page.value > page2targetTime.length - 1)
        page.value = page2targetTime.length - 1;
      if (page.value < 0) page.value = 0;
      console.log(page.value);
    };

    //フルスクリーン
    const isWide = ref(false);
    const windowHeight = ref(100);
    const windowWidth = ref(100);
    const handleResize = () => {
      if (9 * window.innerWidth > 16 * window.innerHeight) isWide.value = true;
      else isWide.value = false;
      windowHeight.value = window.innerHeight;
      windowWidth.value = window.innerWidth;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    const fullscreenStyle = computed(() => {
      if (isWide.value)
        return "position: absolute; width: 100vw; margin: auto; inset: 0px; ";
      else {
        const offset = -((16 / 9) * windowHeight.value - windowWidth.value) / 2;
        return `position: absolute; height: 100vh; margin-left: ${offset}px; inset: 0px`;
      }
    });
    const fullscreenTransform = computed(() => {
      if (isWide.value) {
        const ratio = windowWidth.value / 1920;
        const offset = -(ratio * 1080 - windowHeight.value) / 2;
        return `position: absolute; top:0; left:0; transform-origin:left top; transform:scale(${ratio}); margin-top: ${offset}px;`;
      } else {
        const ratio = windowHeight.value / 1080;
        const offset = -(ratio * 1920 - windowWidth.value) / 2;
        return `position: absolute; top:0; left:0; transform-origin:left top; transform:scale(${ratio}); margin-left: ${offset}px;`;
      }
    });
    const absTubePadding = {
      bottom: clipsData["IconMemo.png"].y2 - clipsData["Youtube.png"].y2,
      right: clipsData["Youtube.png"].x1 - clipsData["IconMemo.png"].x1,
      width: clipsData["Youtube.png"].x2 - clipsData["Youtube.png"].x1,
    };
    const absTwitterPadding = {
      bottom: clipsData["IconMemo.png"].y2 - clipsData["Twitter.png"].y2,
      right: clipsData["Twitter.png"].x1 - clipsData["IconMemo.png"].x1,
      width: clipsData["Twitter.png"].x2 - clipsData["Twitter.png"].x1,
    };
    const absMemoWidth =
      clipsData["IconMemo.png"].x2 - clipsData["IconMemo.png"].x1;
    const tubePadding = computed(() => {
      const maxWidth = Math.min(
        windowWidth.value * 0.5,
        windowHeight.value * 0.4
      );
      if (absMemoWidth > maxWidth) {
        const ratio = maxWidth / absMemoWidth;
        return {
          bottom: absTubePadding.bottom * ratio,
          right: absTubePadding.right * ratio,
          width: absTubePadding.width * ratio,
        };
      } else return absTubePadding;
    });
    const twitterPadding = computed(() => {
      const maxWidth = Math.min(
        windowWidth.value * 0.5,
        windowHeight.value * 0.4
      );
      if (absMemoWidth > maxWidth) {
        const ratio = maxWidth / absMemoWidth;
        return {
          bottom: absTwitterPadding.bottom * ratio,
          right: absTwitterPadding.right * ratio,
          width: absTwitterPadding.width * ratio,
        };
      } else return absTwitterPadding;
    });

    // 動画を操作する諸々
    const video = ref(null);
    // eslint-disable-next-line
    let videoTag: any = null;
    const stopVideo = () => {
      // eslint-disable-next-line
      const videoTag: any = video.value;
      if (videoTag.paused) videoTag.play();
      else videoTag.pause();
    };
    const waitBuffered = async () => {
      // eslint-disable-next-line
      while (true) {
        if (canplaythrough.value) return;
        await sleep(10);
      }
    };
    const route = useRoute();
    const page2targetTime = [0, 7.6]; // ページと動画時間の対応
    if (route.query.skip && route.query.skip == "true") {
      page2targetTime[0] = page2targetTime[1];
    }

    const logbuffer = () => {
      if (videoTag.buffered.length > 0) {
        console.log(
          "buffered(0): ",
          videoTag.buffered.start(0),
          videoTag.buffered.end(0)
        );
      } else {
        console.log("no buffe");
      }
    };

    const videoError = () => {
      alert("Failed to load video");
      alert("Please try again later");
    };
    // 読み込み後時系列に沿って処理していくやつここ
    onMounted(async () => {
      videoTag = video.value;
      logbuffer();
      try {
        await videoTag.load();
        await videoTag.play();
        await sleep(50);
        videoTag.pause();
      } catch (err) {
        alert(err);
      }
      await waitBuffered();
      console.log("before init: ", videoTag.currentTime);
      videoTag.currentTime = page2targetTime[0];
      console.log("initialized: ", videoTag.currentTime);
      if (route.query.skip && route.query.skip == "true") {
        showLoading.value = false;
      }
      showLoading.value = false;
      page.value++;
    });

    // 今開いているページに合わせて動画を進める
    watch(page, async () => {
      if (Math.abs(page2targetTime[page.value] - videoTag.currentTime) < 0.1)
        return;
      if (page2targetTime[page.value] > videoTag.currentTime) {
        await playTo(page2targetTime[page.value]);
        // if (page.value == 1) showAnnotation.value = true;
      } else videoTag.currentTime = page2targetTime[page.value]; // ピッと戻す
    });

    const sleep = (msec: number) =>
      new Promise((resolve) => setTimeout(resolve, msec));
    const playTo = async (time: number) => {
      preventWheel.value = true;
      try {
        videoTag.play();
      } catch (err) {
        alert(err);
      }
      while (videoTag.currentTime < time) {
        await sleep(10);
      }
      videoTag.pause();
      preventWheel.value = false;
    };
    const isStickerOvered = computed(() => {
      return (
        windowWidth.value / windowHeight.value < 1.7 ||
        windowWidth.value / windowHeight.value > 2.5
      );
    });
    const isIconMemoOvered = computed(() => {
      return (
        windowWidth.value / windowHeight.value > 1.9 ||
        windowWidth.value / windowHeight.value < 1.3
      );
    });
    return {
      showAnnotation,
      page,
      paging,
      fullscreenStyle,
      fullscreenTransform,
      stopVideo,
      video,
      showImages,
      canplaythrough,
      onWheelPaging,
      onSwipePaging,
      showLoading,
      isStickerOvered,
      isIconMemoOvered,
      tubePadding,
      twitterPadding,
      isJa,
      videoError,
    };
  },
});
</script>

<style scoped>
.home {
  position: relative;
}

.absolute {
  position: absolute;
  inset: 0;
  margin: auto;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
}
.logo {
  position: absolute;
  top: 10px;
  left: 10px;
  width: max(30vw, 30vh);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease-out;
}
.fade-enter-from {
  opacity: 0;
}
.sticker {
  position: fixed;
  right: 0;
}
.sticker.top {
  bottom: max(30%, 180px);
}
.sticker.middle {
  bottom: max(20%, 120px);
}
.sticker.bottom {
  bottom: max(10%, 60px);
}
.memo {
  position: fixed;
  bottom: 10px;
  left: 10px;
}
.memo.icon {
  cursor: pointer;
}
.sticker {
  cursor: pointer;
  max-width: 40vw;
}
.dropshadow {
  filter: drop-shadow(8px 8px 0px rgba(24, 24, 29, 0.2));
}
.memo.base {
  max-width: min(50vw, 40vh);
}
</style>
