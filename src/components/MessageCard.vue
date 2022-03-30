<template>
  <transition :name="trans_class" appear>
    <div class="message-card" @click="childParams">
      <div class="message-card-body">
        <div class="image-wrapper">
          <img :src="imageUrl" />
        </div>
        <div class="msg-prf-wrap">
          <img class="tw-icon" :src="iconUrl" alt="" />
          <div class="msg-prf">
            <div class="tw-dn">
              {{ displayName }}
            </div>
            <div class="tw-id">
              @{{ twitter_id }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">

import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "MessageCard",
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
    }
  },
  setup(props) {
    const imageFetchUrl = `https://api.shionchan.fan/mosaic/grid?image=${props.image}`;
    const imageUrl = `https://shion-dev.s3.ap-northeast-1.amazonaws.com/images/640_360/${props.image}`;
    const twitterInfoFetchUrl = `https://api.shionchan.fan/twitter/userinfo?tw_id=${props.twitter_id}`;

    const modal = ref(false);
    const m = ref(0);
    const x = ref(0);
    const y = ref(0);
    const trans_class = ref("");
    const displayName = ref("");
    const iconUrl = ref("");

    const fetchImageInfo = async () => {
      await axios
        .get(imageFetchUrl)
        .then((res: any) => {
          m.value = res.data.mosaic_id;
          x.value = res.data.x;
          y.value = res.data.y;
        });
    };

    const fetchTwitterUserInfo = async () => {
      await axios
        .get(twitterInfoFetchUrl)
        .then((res: any) => {
          displayName.value = res.data.display_name;
          iconUrl.value = res.data.icon_url === "unknown"
            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2Oor6//DwAFewJ9z0FqqgAAAABJRU5ErkJggg=="
            : res.data.icon_url
          ;
        })
        .catch((err) => {
          displayName.value = "unknown";
          iconUrl.value =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2Oor6//DwAFewJ9z0FqqgAAAABJRU5ErkJggg==";
          console.log(err, "failed to get userId");
        });
    };

    const showModal = () => {
      modal.value = true;
    };

    const hideModal = () => {
      modal.value = false;
    };

    const generateTransitionClass = () => {
      const rand = Math.floor(Math.random() * 8);
      trans_class.value = `message-card-${rand}`;
    };

    fetchImageInfo();
    fetchTwitterUserInfo();
    generateTransitionClass();
    return {
      imageUrl,
      modal,
      showModal,
      hideModal,
      m,
      x,
      y,
      trans_class,
      displayName,
      iconUrl
    };
  },
  methods: {
    childParams() {
      this.$emit("childParams", this.twitter_id, this.image, this.m, this.x, this.y);
    }
  }
});
</script>

<style scoped lang="scss">
.message-card {
  margin: 5px;
  cursor: pointer;

  .message-card-body {
    padding: 3px;

    .image-wrapper {
      height: 180px;

      img {
        border-radius: 5px 5px 0 0;
        max-width: 320px;
        max-height: 180px;
      }
    }

    .msg-prf-wrap {
      background-color: rgba(107, 65, 129, 0.5);
      border-radius: 0 0 5px 5px;
      display: flex;
      display: -webkit-flex;
      display: -moz-flex;
      max-width: 320px;

      .tw-icon {
        margin: 5px;
        border-radius: 50%;
        height: 48px;
        max-height: 48px;
        width: 48px;
        max-width: 48px;
        background-color: rgb(63, 63, 63);
      }

      .msg-prf {
        width: 262px;
        margin: auto;
        flex-direction: column;

        .tw-dn {
          display: flex;
          display: -webkit-flex;
          display: -moz-flex;
          justify-content: center;
          overflow-y: hidden;
          width: 100%;
          height: 50%;
          max-height: 29px;
          font-size: 18px;
        }

        .tw-id {
          display: flex;
          display: -webkit-flex;
          display: -moz-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 50%;
          max-height: 29px;
          font-size: 14px;
        }
      }
    }
  }
}

.message-card-0-enter-from {
  transform: translate(random(100) * (random(100) * -1)* 1px, random(1000) * 1px);
}

.message-card-1-enter-from {
  transform: translate(random(100) * (random(100) * -1)* 1px, random(1000) * 1px);
}

.message-card-2-enter-from {
  transform: translate(random(100) * (random(100) * -1)* 1px, random(1000) * 1px);
}

.message-card-3-enter-from {
  transform: translate(random(100) * (random(100) * -1)* 1px, random(1000) * 1px);
}

.message-card-4-enter-from {
  transform: translate(random(100) * (random(100) * 1)* 1px, random(1000) * 1px);
}

.message-card-5-enter-from {
  transform: translate(random(100) * (random(100) * 1)* 1px, random(1000) * 1px);
}

.message-card-6-enter-from {
  transform: translate(random(100) * (random(100) * 1)* 1px, random(1000) * 1px);
}

.message-card-7-enter-from {
  transform: translate(random(100) * (random(100) * 1)* 1px, random(1000) * 1px);
}

.message-card-0-enter-active, .message-card-1-enter-active, .message-card-2-enter-active,
.message-card-3-enter-active, .message-card-4-enter-active, .message-card-5-enter-active,
.message-card-6-enter-active, .message-card-7-enter-active {
  transition: all 700ms ease-out;
}

//.message-card-0-enter-to, .message-card-1-enter-to, .message-card-2-enter-to {
//}
//
//.message-card-0-leave-from, .message-card-1-leave-from, .message-card-2-leave-from {
//}
//
//.message-card-0-leave-active, .message-card-1-leave-active, .message-card-2-leave-active, {
//}
//
//.message-card-0-leave-to, .message-card-1-leave-to, .message-card-2-leave-to {
//}

</style>