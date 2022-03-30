<template>
  <div class="credit-header" :class="{mobile: isMobile() || isIpad()}">
    {{ text }}
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreditHeader",
  props: {
    text: {
      type: String,
      default: "",
      required: true
    }
  },
  setup() {
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

    return {
      isMobile,
      isIpad
    };
  }
});
</script>

<style scoped lang="scss">
.credit-header {
  width: 450px;
  max-width: 640px;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 12px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  
  &.mobile{
    width: 320px;
    font-size: 22px;
    font-weight: 450;
  }
}
</style>