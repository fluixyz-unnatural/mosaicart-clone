<template>
  <div class="message-viewer" :class="{mobile: isMobile() || isIpad()}">
    <div
      :class="{
        logo_mobile: isMobile() || isIpad(),
        mobile: isMobile(),
        ipad: isIpad(),
        horizontal: isHorizontal,
      }"
    >
      <img
        class="header-img"
        src="../assets/img/messages/header_messages.png"
        alt="ヘッダー"
      />
    </div>
    <div ref="messagesElm" class="messages" :class="{horizontal: isHorizontal}"
         @scroll="handleOnScroll">
      <MessageCard
        v-for="pair in pairsShowing.value"
        :key="pair.img"
        :image="pair.img"
        :twitter_id="pair.twitter_id"
        @childParams="setChildParams"
        @click="showModal"
      />
    </div>

    <div class="absolute back" :class="{horizontal: isHorizontal}">
      <router-link class="link" to="/?skip=true">
        <img class="back-btn" v-bind:class="{mobile: isMobile() || isIpad(), horizontal: isHorizontal}"
             src="../assets/img/messages/back.png" />
      </router-link>
    </div>
    <div class="absolute lf-wrapper" v-if="!isMobile() && !isIpad()">
      <img
        class="absolute lf-btm"
        src="../assets/img/messages/minishion02.png"
      />
    </div>
    <div class="absolute rt-wrapper" v-if="!isMobile() && !isIpad()">
      <img
        class="absolute rt-btm"
        src="../assets/img/messages/minishion01.png"
      />
    </div>
  </div>

  <div class="wrapper">
    <transition name="details" appear>
      <DetailsMessage
        v-if="modal"
        @deleteModal="hideModal"
        :m="child_m"
        :i="child_x"
        :j="child_y"
        :image="child_image"
        :twitter_id="child_twitter_id"
        @detailPaging="handleDetailPaging"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, onMounted, reactive, ref } from "vue";
import MessageCard from "@/components/MessageCard.vue";
import DetailsMessage from "@/components/DetailsMessage.vue";

export interface TwitterImagePair {
  img: string;
  twitter_id: string;
}

export interface MosaicGridInfo {
  m: number;
  x: number;
  y: number;
}

export default defineComponent({
  name: "MessageViewer",
  components: {
    MessageCard,
    DetailsMessage
  },
  setup() {
    const messagesElm = ref<HTMLElement>();

    const scrollOffset = 60;
    const apiUrl = "https://api.shionchan.fan/pairs/tw_im";
    const modal = ref(false);
    const modalClass = ref("");

    const child_twitter_id = ref("");
    const child_image = ref("");
    const child_m = ref(0);
    const child_x = ref(0);
    const child_y = ref(0);

    const pairs: any = reactive({ pair: [] });
    const pairsShowing: any = reactive({ pair: [] });
    const pairsLength = ref(0);
    const pairsNowIndex = ref(0);
    const pairsIncrementCount = ref(0);

    const scrollY = ref(0);
    const isHorizontal = ref(false);

    const isMobile = () => {
      if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        return true;
      } else {
        return false;
      }
    };

    const isIpad = () => {
      if (navigator.userAgent.match(/iPad.+Mobile/)) {
        return true;
      } else {
        return false;
      }
    };

    const checkIsHorizontal = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (isMobile() && width > height) {
        console.log((isMobile() || isIpad()) && width > height);
        isHorizontal.value = true;
      } else {
        isHorizontal.value = false;
      }
    };

    const setChildParams = (
      twitter_id: string,
      image: string,
      m: number,
      x: number,
      y: number
    ) => {
      child_twitter_id.value = twitter_id;
      child_image.value = image;
      child_m.value = m;
      child_x.value = x;
      child_y.value = y;
    };

    const showModal = (): void => {
      modal.value = true;
    };

    const hideModal = (): void => {
      modal.value = false;
    };

    const calcHorizontalCardCount = (): number => {
      return Math.floor(messagesElm!.value!.clientWidth / 340);
    };

    const calcVerticalCardCount = (): number => {
      return Math.round(messagesElm!.value!.clientHeight / 228) + 1;
    };

    const addShowingPairScroll = (): void => {
      if (pairsShowing.value.length >= pairs.value.length) return;
      Array.prototype.push.apply(
        pairsShowing.value,
        pairs.value.slice(
          pairsNowIndex.value,
          pairsNowIndex.value + pairsIncrementCount.value
        )
      );
      pairsNowIndex.value += pairsIncrementCount.value;
    };

    const addShowingPairWidthChanged = (
      inc: number,
      isDecrease: boolean
    ): void => {
      if (pairsShowing.value.length >= pairs.value.length) return;
      Array.prototype.push.apply(
        pairsShowing.value,
        pairs.value.slice(pairsNowIndex.value, pairsNowIndex.value + inc)
      );
      const diff = isDecrease ? inc * -1 : inc;
      pairsNowIndex.value += diff;
      pairsIncrementCount.value += diff;
    };

    const addShowingPairHeightChanged = (inc: number): void => {
      if (pairsShowing.value.length >= pairs.value.length) return;
      Array.prototype.push.apply(
        pairsShowing.value,
        pairs.value.slice(pairsNowIndex.value, pairsNowIndex.value + inc)
      );
      pairsNowIndex.value += inc;
    };

    const handleWidthChanged = () => {
      const width = calcHorizontalCardCount();
      const widthDiff = width - (pairsShowing.value.length % width);
      if (width === widthDiff) return;
      if (width !== pairsIncrementCount.value) {
        const dec = pairsIncrementCount.value > width;
        addShowingPairWidthChanged(widthDiff, dec);
        pairsIncrementCount.value = width;
      }
    };

    const handleHeightChanged = () => {
      const height = calcVerticalCardCount();
      const diff =
        height - pairsShowing.value.length / pairsIncrementCount.value;
      if (diff > 0) {
        const inc = diff * pairsIncrementCount.value;
        addShowingPairHeightChanged(inc);
      }
    };

    const handleOnScroll = (event: any) => {
      if (
        event.target.clientHeight + event.target.scrollTop + scrollOffset >=
        event.target.scrollHeight
      ) {
        addShowingPairScroll();
      }
    };

    const handleDetailPaging = async (
      offset: number,
      pair: TwitterImagePair
    ) => {
      const currentPair = pairs.value.filter(
        (e: TwitterImagePair) => e.img === pair.img
      );
      if (currentPair.length === 0) {
        return;
      }

      const currentIndex = pairs.value.indexOf(currentPair[0]);
      const destinationIndex = currentIndex + offset;
      if (destinationIndex < 0 || destinationIndex >= pairs.value.length) {
        return;
      }

      const destinationPair = pairs.value[destinationIndex];
      const fetchUrl = `https://api.shionchan.fan/mosaic/grid?image=${destinationPair.img}`;
      const data = await fetchDetailInfo(fetchUrl);
      setChildParams(
        destinationPair.twitter_id,
        destinationPair.img,
        data.m,
        data.x,
        data.y
      );
    };

    const initialMessages = () => {
      const wCount =
        Math.floor((window.innerWidth * 0.9) / 340) === 0
          ? 1
          : Math.floor((window.innerWidth * 0.9) / 340);
      const hCount = Math.floor((window.innerHeight * 0.9) / 228) + 2;
      const init = wCount === 1 ? (wCount * hCount) + 1 : (wCount * hCount);

      pairsLength.value = pairs.value.length;
      pairsShowing.value = pairs.value.slice(0, init);
      pairsNowIndex.value = init;
      pairsIncrementCount.value = wCount === 1 ? 2 : wCount;
    };

    const fetchDetailInfo = async (url: string): Promise<MosaicGridInfo> => {
      const data = await axios.get(url).then((res: any) => {
        return res.data;
      });
      const res: MosaicGridInfo = {
        m: data.mosaic_id,
        x: data.x,
        y: data.y
      };
      return res;
    };

    const fetchPairs = async () => {
      await axios
        .get(apiUrl)
        .then((res: any) => {
          pairs.value = res.data.pairs;
        })
        .catch((err: any) => {
          console.error(err);
        });
    };

    const inputQuery = async () => {
      await fetchPairs();
    };

    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    onMounted(async () => {
      await inputQuery();
      initialMessages();
      checkIsHorizontal();
      setFillHeight();

      window.onresize = () => {
        handleWidthChanged();
        handleHeightChanged();
        checkIsHorizontal();
        setFillHeight();
      };
    });

    return {
      isMobile,
      isIpad,
      isHorizontal,
      handleOnScroll,
      messagesElm,
      modal,
      modalClass,
      showModal,
      hideModal,
      pairsShowing,
      handleDetailPaging,
      setChildParams,
      child_image,
      child_twitter_id,
      child_m,
      child_x,
      child_y,
      scrollY
    };
  }
});
</script>

<style scoped lang="scss">
.message-viewer {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  display: flex;
  display: -moz-flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/img/mosaic/bgStripe.jpg");
  background-size: auto;
  background-position: center center;

  &.mobile {
    height: -webkit-fill-available;
  }

  .logo_mobile {
    display: flex;
    display: -moz-flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &.mobile {
      width: 240px;
      top: 0px;

      &.horizontal {
        justify-content: flex-end;
        height: 56px;
        top: 0px;
      }
    }

    &.ipad {
      width: 240px;
    }
  }

  .header-img {
    display: flex;
    display: -moz-flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 160px;
    top: 0;
  }

  .messages {
    background-color: rgba(255, 255, 255, 0.61);
    border-radius: 15px;
    display: flex;
    display: -moz-flex;
    display: -webkit-flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: content;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    width: 90vw;
    height: 80vh;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    z-index: 499;

    &.horizontal {
      width: 95vw;
    }
  }

  .messages::-webkit-scrollbar {
    display: none;
  }

  .absolute {
    position: absolute;
  }

  .back {
    top: 20px;
    left: 10px;

    &.horizontal {
      top: 10px;
    }
  }

  .back-btn {
    height: 64px;
    padding: 3px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);

    &.mobile {
      height: 48px;

      &.horizontal {
        height: 32px;
        top: 0px;
      }
    }
  }

  .lf-wrapper {
    left: 0;
    bottom: 0;
    height: 550px;
    width: 550px;
    overflow: hidden;
    z-index: 0;

    .lf-btm {
      right: 0;
      top: 0;
      overflow: hidden;
      z-index: 0;
    }
  }

  .rt-wrapper {
    right: 0;
    bottom: 0;
    height: 440px;
    width: 400px;
    overflow: hidden;
    z-index: 0;

    .rt-btm {
      left: 0px;
      top: 0px;
      overflow: hidden;
      z-index: 0;
    }
  }
}

.wrapper {
  display: flex;
  display: -moz-flex;
  display: -webkit-flex;
  /*justify-content: center;*/
  z-index: 899;

  .details-enter-active,
  .details-leave-active {
    transition: all 250ms ease;
    z-index: 899;
  }

  .details-enter-from,
  .details-leave-to {
    opacity: 0;
    z-index: 899;
  }

  .details-enter-to,
  .details-leave-from {
    opacity: 1;
    z-index: 899;
  }
}
</style>
