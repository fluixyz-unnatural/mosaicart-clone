<template>
  <div class="home">
    <Mosaic
      v-show="showMosaic"
      class="absolute"
      :mosaicId="mosaicId"
      @ready="mosaicWasReadied"
      :stage="stage"
    />
    <FullscreenLoading @load="loadedLoading" v-show="showLoading" />
    <div class="animationContainer" v-if="showAnimation">
      <OPAnimation class="animation" :style="opAnimationStyle" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Mosaic from "@/components/Mosaic.vue";
import FullscreenLoading from "@/components/FullscreenLoading.vue";
import OPAnimation from "@/components/OPAnimation.vue";
import axios from "axios";

export interface mosaicId {
  mosaic_id: string;
}

export interface targets {
  targets: Array<string>;
}

export default defineComponent({
  name: "MosaicViewer",
  components: {
    Mosaic,
    FullscreenLoading,
    OPAnimation,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const showMosaic = ref(false);
    const showAnimation = ref(false);
    const showLoading = ref(true);
    const mosaicId = ref("");
    const stage = ref("");
    let loadingTick = 0;
    const progress = ref("");
    let onAnimation = true;
    if (navigator.userAgent.match(/iPhone/)) {
      onAnimation = false;
    }

    //クエリに応じてモザイクIDを決定
    const inputQuery = async () => {
      if (route.query.i && route.query.j && route.query.m) {
        // ツイートで共有されるリンク
        mosaicId.value = route.query.m as unknown as string;
      } else if (route.query.m) {
        // モザイクID指定
        mosaicId.value = route.query.m as unknown as string;
      } else if (route.query.tg) {
        // ターゲットID指定
        //tgからモザイクIDを得る
        mosaicId.value = await tgt2Mosaic(route.query.tg as unknown as string);
      } else {
        // 未指定
        const target = "mainvisual.jpg";
        mosaicId.value = await tgt2Mosaic(target);
      }
      console.log("mosaicId was loaded by viewer", mosaicId.value);
      progress.value += "mosaicId ";
    };
    // ターゲット画像名からランダムにモザイクIDを返す
    const tgt2Mosaic = async (tgt: string): Promise<string> => {
      let mosaic = "";
      await axios
        .get<mosaicId>("https://api.shionchan.fan/mosaic?tg_name=" + tgt)
        .then((res) => {
          mosaic = res.data.mosaic_id;
        })
        .catch((err) => {
          alert(err);
          router.push("/");
        });
      return mosaic;
    };
    const sleep = (msec: number) =>
      new Promise((resolve) => setTimeout(resolve, msec));

    const loadedLoading = () => {
      console.log("Loading was loaded");
      progress.value += "loading ";
      setInterval(() => {
        loadingTick++;
      }, 10);
    };
    const waitLoadingTick = async () => {
      while (loadingTick < 150) {
        await sleep(10);
        console.log("waitloading");
      }
      progress.value += "minloading ";
      return;
    };

    inputQuery();
    const mosaicWasReadied = async () => {
      console.log("mosaic was readied");
      progress.value += "mosaic ";
      await waitLoadingTick();
      if (!onAnimation) {
        showMosaic.value = true;
        stage.value = "panchira";
        showLoading.value = false;
        setTimeout(() => {
          stage.value = "marumie";
        }, 1000);
      } else showAnimation.value = true;
    };
    //アニメーションの進行度
    let tickSum = 0;
    onMounted(() => {
      window.addEventListener("message", tickCount);
    });
    //iframeのpostmessageからtick数をカウント
    //ticks数に応じて表示を切り替える
    const tickCount = (e: MessageEvent) => {
      if (e.data === "animationTick") {
        tickSum++;
        if (tickSum == 61) {
          showMosaic.value = true;
          showLoading.value = false;
          stage.value = "panchira";
          return;
        }
        if (tickSum == 86) {
          showAnimation.value = false;
          stage.value = "marumie";
          return;
        }
      }
    };
    onUnmounted(() => {
      window.removeEventListener("message", tickCount);
    });
    const opAnimationStyle = computed(() => {
      let scale = 0;
      if (window.innerHeight / 1080 > window.innerWidth / 1920) {
        scale = window.innerHeight / 1080;
      } else {
        scale = window.innerWidth / 1920;
      }
      const aniWidth = 1920 * scale;
      const aniHeight = 1080 * scale;
      const dx = (window.innerWidth - aniWidth) / 4;
      const dy = (window.innerHeight - aniHeight) / 4;
      const style = `transform-origin: top left;transform: scale(${scale}) translate(${dx}px,${dy}px)`;
      return style;
    });
    return {
      mosaicId,
      showMosaic,
      mosaicWasReadied,
      showAnimation,
      showLoading,
      loadedLoading,
      opAnimationStyle,
      stage,
      progress,
    };
  },
});
</script>

<style scoped>
p {
  position: fixed;
  top: 50vh;
  left: 10vw;
  font-size: 30px;
}
.home {
  position: relative;
}
.absolute {
  position: fixed;
  top: 0;
  left: 0;
}
.animation {
  position: absolute;
  border: none;
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 1080px;
  pointer-events: none;
}
.animationContainer {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.loading {
  font-size: 128pt;
  color: white;
}
</style>
