<template>
  <transition name="modalpop" appear>
    <section>
      <div class="bg" @click="del" />
      <div class="modal">
        <img class="im" :src="imageUrl" @load="imgLoaded = true" />
        <div v-show="!imgLoaded">
          <div class="loadbg"></div>
          <img class="loading" src="@/assets/img/load.png" />
        </div>
        <div class="misc">
          <div class="prf-wrapper">
            <img @click="anchorUserPage" class="icon" :src="iconUrl" />
            <div @click="anchorUserPage" class="userDesc">
              <p class="skeleton" v-if="!userInfoLoaded">piyo</p>
              <p class="skeleton" v-if="!userInfoLoaded">piyo</p>
              <p class="name" :class="{prf_mobile: isMobile()}"
                 v-if="userInfoLoaded">{{ displayName }}</p>
              <p class="at" :class="{prf_mobile: isMobile()}"
                 v-if="userInfoLoaded">@{{ props.twitter_id }}</p>
            </div>
          </div>
          <div class="btn-wrapper" :class="{ wrap_mobile: isMobile() }">
            <a class="button mosaic"
               :class="{ mobile: isMobile() }"
               target="_blank"
               ref="noopener noreferrer"
               :href="mosaicUrl"
            >
              {{ $t("messages.showInMosaic") }}
            </a>
            <a
              class="button"
              :class="{ mobile: isMobile() }"
              target="_blank"
              ref="noopener noreferrer"
              :href="shareUrl"
            >
              {{ $t("messages.tweet") }}
            </a>
          </div>
        </div>
        <svg
          @click="paging(-1)"
          xmlns="http://www.w3.org/2000/svg"
          class="chevron-left"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <svg
          @click="paging(1)"
          xmlns="http://www.w3.org/2000/svg"
          class="chevron-right"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </section>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watchEffect } from "vue";
import axios from "axios";
import { TwitterImagePair } from "@/views/MessageViewer.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "DetailsMessage",
  props: {
    twitter_id: {
      type: String,
      default: "",
      required: true
    },
    image: {
      type: String,
      default: "",
      required: true
    },
    i: {
      type: Number,
      default: 0,
      required: true
    },
    j: {
      type: Number,
      default: 0,
      required: true
    },
    m: {
      type: Number,
      default: 0,
      required: true
    }
  },
  setup(props, context) {
    const { t } = useI18n();
    const imgLoaded = ref(true);
    const userInfoLoaded = ref(false);

    const imageUrl = computed(() =>
      `https://shion-dev.s3.ap-northeast-1.amazonaws.com/images/1280_720/${props.image}`
    );

    const focusPath = computed(() =>
      `/mosaic?m=${props.m}&i=${props.i}&j=${props.j}`
    );

    const tweet =  `${t("tweet")}%0D%0A%20%23紫咲シオン%0D%0A%20%23紫咲シオン3周年記念%0D%0A`;
    
    const shareUrl = computed(() =>
      `https://twitter.com/share?text=${tweet}&url=https://3rd.shionchan.fan/mosaic?m=${props.m}%26i=${props.i}%26j=${props.j}`
    );

    const mosaicUrl = computed(() =>
      `https://3rd.shionchan.fan/mosaic?m=${props.m}&i=${props.i}&j=${props.j}`
    );

    const apiUrl = computed(() =>
      `https://api.shionchan.fan/twitter/userinfo?tw_id=${props.twitter_id}`
    );

    const iconUrl = ref("");
    const displayName = ref("");
    const twitterId = ref(props.twitter_id);

    const isMobile = () => {
      if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        return true;
      } else {
        return false;
      }
    };

    const anchorUserPage = () => {
      window.open(`http://twitter.com/${props.twitter_id}`, "noreferrer");
    };

    let preImg = "";
    const paging = (offset: number) => {
      preImg = props.image;
      const param: TwitterImagePair = {
        img: props.image,
        twitter_id: props.twitter_id
      };
      context.emit("detailPaging", offset, param);
    };

    const fetchTwitterInfo = async () => {
      await axios
        .get(apiUrl.value)
        .then((res) => {
          iconUrl.value = res.data.icon_url === "unknown"
            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2Oor6//DwAFewJ9z0FqqgAAAABJRU5ErkJggg=="
            : res.data.icon_url;
          displayName.value = res.data.display_name;
          userInfoLoaded.value = true;
        })
        .catch((err) => {
          twitterId.value = "tos";
          displayName.value = "unknown";
          iconUrl.value =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2Oor6//DwAFewJ9z0FqqgAAAABJRU5ErkJggg==";
          console.log(err, "failed to get userId");
          userInfoLoaded.value = true;
        });
    };

    onMounted(async () => {
      await fetchTwitterInfo();
    });

    watchEffect(async () => {
      if (preImg != props.image) {
        imgLoaded.value = false;
        userInfoLoaded.value = false;
      }
      await fetchTwitterInfo();
    });

    const del = () => {
      context.emit("deleteModal");
      imgLoaded.value = false;
      userInfoLoaded.value = false;
    };

    return {
      isMobile,
      props,
      del,
      anchorUserPage,
      paging,
      imageUrl,
      focusPath,
      shareUrl,
      mosaicUrl,
      iconUrl,
      displayName,
      twitterId,
      imgLoaded,
      userInfoLoaded
    };
  }
});
</script>

<style scoped>
.modal {
  width: 90vw;
  max-width: calc((90vh - 80px) / 9 * 16);
  height: calc(90vw / 16 * 9 + 80px);
  max-height: calc(90vh);
  background-color: white;
  position: fixed;
  border-radius: 10px;
  inset: 0;
  margin: auto;
  color: black;
  overflow: hidden;
  user-select: none;
  z-index: 899;
}

.bg {
  background-color: black;
  opacity: 0.3;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 899;
}

.im {
  width: 90vw;
  max-width: calc((90vh - 80px) / 9 * 16);
  height: calc(90vw / 16 * 9);
  max-height: calc(90vh - 80px);
  background-color: rgb(63, 63, 63);
}

p {
  padding: 0;
  margin: 0;
  font-size: 12px;
  text-align: left;
}

.misc {
  display: flex;
  display: -moz-flex;
  display: -webkit-flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  user-select: none;
}

.prf-wrapper {
  display: flex;
  display: -moz-flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}

.btn-wrapper {
  height: auto;
  display: flex;
  display: -moz-flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}

.wrap_mobile {
  display: flex;
  display: -moz-flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
}

.button {
  min-width: 100px;
  width: auto;
  height: 48px;
  border-radius: 10px;
  line-height: 48px;
  background: #549eff;
  margin-left: auto;
  margin-right: 20px;
  padding: 5px 10px;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
}

.mosaic {
  min-width: 100px;
  margin-right: 16px;
  background-color: rgb(107, 65, 129);
  z-index: 899;
}

.mobile {
  font-size: 10px;
  line-height: 20px;
  height: 20px;
  margin: 2px 0;
}


.icon {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 20px;
}

.at {
  color: #767676;
  cursor: pointer;
}

.name {
  cursor: pointer;
}

.prf_mobile {
  max-width: 120px;
  height: 24px;
  line-height: 24px;
  overflow: hidden;
}

.x-circle {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 48px;
  height: 48px;
  color: white;
  opacity: 0.5;
}

.x-circle:hover {
  opacity: 0.8;
}

.modalpop-enter-active,
.modalpop-leave-active {
  transition: all 0.5s ease-in-out;
}

.modalpop-enter-from,
.modalpop-leave-to {
  opacity: 0;
}

.chevron-left {
  position: absolute;
  width: 30px;
  height: calc(90vw / 16 * 9);
  max-height: calc(90vh - 80px);
  top: 0;
  left: 0;
  padding-left: 3%;
  padding-right: 3%;
  margin: auto;
  color: white;
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.3s;
}

.chevron-left:hover {
  opacity: 1;
}

.chevron-right {
  position: absolute;
  width: 30px;
  height: calc(90vw / 16 * 9);
  max-height: calc(90vh - 80px);
  top: 0;
  right: 0;
  padding-left: 3%;
  padding-right: 3%;
  margin: auto;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s;
}

.chevron-right:hover {
  opacity: 1;
}

.loading {
  position: absolute;
  width: 100px;
  height: 100px;
  inset: 0 0 80px 0;
  margin: auto;
  animation: 1s linear infinite rotation;
}

.loadbg {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: calc(100% - 80px);
  top: 0;
  left: 0;
}

@keyframes rotation {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.skeleton {
  background-color: rgb(212, 212, 212);
  color: rgba(0, 0, 0, 0);
  border-radius: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100px;
  overflow: hidden;
  position: relative;
}

.skeleton::before {
  content: "avava";
  display: block;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  position: absolute;
  animation: skeleton-animation 1.2s linear infinite;
}

@keyframes skeleton-animation {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
