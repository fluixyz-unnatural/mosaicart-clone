<template>
  <div class="credit" :class="{mobile: isMobile() || isIpad()}">
    <div
      :class="{ 
        logo_mobile: isMobile() || isIpad(),
        mobile: isMobile(),
        ipad: isIpad(),
        horizontal: isHorizontal 
    }"
    >
      <img
        class="header-img"
        src="../assets/img/credit/header_credit.png"
        alt="ヘッダー"
      />
    </div>
    <div class="credit-body" :class="{horizontal: isHorizontal}">
      <div class="column card" :class="{mobile: isMobile()}">
        <CreditHeader :text="$t('credit.illustrationH')" />
        <CreditPerson tw_id="_konkito" name="こんきと" />
      </div>
      <hr />
      <div class="column card" :class="{mobile: isMobile()}">
        <CreditHeader :text="$t('credit.planningH')" />
        <CreditPerson tw_id="15rpm_" name="15rpm" />
      </div>
      <hr />
      <div class="card space-between"
           :class="{mobile: isMobile() || isIpad(), column: (isMobile() || isIpad()) && !isHorizontal, row: (!isMobile() && !isIpad()) || isHorizontal}">
        <div class="column">
          <CreditHeader :text="$t('credit.designH')" />
          <CreditPerson tw_id="100ton250" name="100トン" />
        </div>
        <div class="column">
          <CreditHeader :text="$t('credit.modelingH')" />
          <CreditPerson tw_id="NekoHige1119" name="ねこヒゲ" />
        </div>
      </div>
      <hr />
      <div class="card space-between"
           :class="{mobile: isMobile() || isIpad(), column: (isMobile() || isIpad()) && !isHorizontal, row: (!isMobile() && !isIpad()) || isHorizontal}">
        <div class="column">
          <CreditHeader :text="$t('credit.webPgH')" />
          <CreditPerson tw_id="higara222" name="ひがら" />
          <CreditPerson tw_id="Pepeshiranui" name="めかぶ" />
        </div>
        <div class="column">
          <CreditHeader :text="$t('credit.srvPgH')" />
          <!--          <CreditHeader :text="$t('credit.srvPgH2')" />-->
          <CreditPerson tw_id="Pepeshiranui" name="めかぶ" />
        </div>
      </div>
      <hr />
      <div class="column card" :class="{mobile: isMobile()}">
        <CreditHeader :text="$t('credit.fansiteH')" />
        <CreditPerson tw_id="Pene_Rigate" name="ペネ" />
      </div>
      <hr />
      <div class="column card" :class="{mobile: isMobile()}">
        <CreditHeader :text="$t('credit.picturesH')" />
        <span class="spacer1" />
        <div class="space-evenly"
             :class="{column: (isMobile() || isIpad()) && !isHorizontal, row: (!isMobile() && !isIpad()) || isHorizontal, width720px:isHorizontal}">
          <CreditPerson tw_id="Takatsu_Gizami" name="たかつ" />
          <CreditPerson tw_id="pocopocoing" name="ぽこぽこ" />
          <CreditPerson tw_id="noi_mine" name="のいみね" />
        </div>
        <div class="space-evenly"
             :class="{column: (isMobile() || isIpad()) && !isHorizontal, row: (!isMobile() && !isIpad()) || isHorizontal, width720px:isHorizontal}">
          <CreditPerson tw_id="youyoukai9" name="幼妖怪(ようようかい)" />
          <CreditPerson tw_id="tonz159" name="とんとん。" />
          <CreditPerson tw_id="_r_nqc0" name="rnqco(まこ)" />
        </div>
        <div class="space-evenly"
             :class="{column: (isMobile() || isIpad()) && !isHorizontal, row: (!isMobile() && !isIpad()) || isHorizontal, width720px:isHorizontal}">
          <CreditPerson tw_id="akashibag" name="赤柴" />
          <CreditPerson tw_id="jsrr_k04" name="柏瀬かるね" />
          <CreditPerson tw_id="Ohihilz" name="오히힐/オヒヒル" />
        </div>
      </div>
      <hr />
      <div class="column card" :class="{mobile: isMobile()}">
        <CreditHeader :text="$t('credit.specialH')" />
        <span class="spacer1" />
        <div class="sub-header" :class="{mobile: isMobile() || isIpad()}">
          {{ $t("credit.allShiokko") }}
        </div>
        <span class="spacer2" />
        <div class="sub-header" :class="{mobile: isMobile() || isIpad()}">
          {{ $t("credit.and") }}
        </div>
        <span class="spacer2" />
        <span class="spacer2" />
        <span class="spacer2" />
        <div class="sub-header" :class="{mobile: isMobile() || isIpad()}">
          {{ $t("credit.murasakishion") }}
        </div>
      </div>
      <span class="spacer2" />
      <span class="spacer2" />
      <hr/>
      <div class="sub-header" :class="{mobile: isMobile() || isIpad()}">
        {{ $t("disclaimer") }}
      </div>
      <span class="space1" />
      <div class="sub-header" :class="{mobile: isMobile() || isIpad()}">
        {{ $t("disclaimer2") }}
      </div>
      <span class="spacer2" />
    </div>
    <div class="absolute back" :class="{horizontal: isHorizontal}">
      <router-link class="link" to="/?skip=true">
        <img class="back-btn" :class="{mobile: isMobile() || isIpad(), horizontal: isHorizontal}"
             src="../assets/img/messages/back.png" />
      </router-link>
    </div>
    <div class="absolute lf-wrapper" v-if="!isMobile() && !isIpad()">
      <img class="absolute lf-btm" src="../assets/img/messages/minishion02.png" />
    </div>
    <div class="absolute rt-wrapper" v-if="!isMobile() && !isIpad()">
      <img class="absolute rt-btm" src="../assets/img/messages/minishion01.png" />
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import CreditPerson from "@/components/CreditPerson";
import CreditHeader from "@/components/CreditHeader";

export default defineComponent({
  name: "Credit",
  components: { CreditHeader, CreditPerson },
  setup() {
    const illustration = { h: "credit.illustrationH", b: ["credit.illustrationB"] };
    const planning = { h: "credit.planningH", b: ["credit.planningB"] };
    const design = { h: "credit.designH", b: ["credit.designB"] };
    const modeling = { h: "credit.modelingH", b: ["credit.modelingB"] };
    const webPg = { h: "credit.webPgH", b: ["credit.webPgB"] };
    const srvPg = { h: "credit.srvPgH", b: ["credit.srvPgB"] };
    const fansite = { h: "credit.fansiteH", b: ["credit.fansiteB"] };
    const special = { h: "credit.specialH", b: ["credit.specialB"] };

    const isHorizontal = ref(false);

    const twitterUrl = "https://twitter.com/";

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
      if ((isMobile()) && width > height) {
        console.log((isMobile() || isIpad()) && width > height);
        isHorizontal.value = true;
      } else {
        isHorizontal.value = false;
      }
    };

    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    onMounted(() => {
      checkIsHorizontal();
      setFillHeight();

      window.onresize = () => {
        setFillHeight();
        checkIsHorizontal();
      };
    });

    return {
      twitterUrl,
      isMobile,
      isIpad,
      isHorizontal,
      illustration,
      planning,
      design,
      modeling,
      webPg,
      srvPg,
      fansite,
      special
    };
  }
});
</script>

<style scoped lang="scss">
.credit {
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
      top:  0px;

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

  .credit-body {
    background-image: unset;
    background-color: rgba(255, 255, 255, 0.61);
    border-radius: 15px;
    display: flex;
    display: -moz-flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
    width: 90vw;
    max-width: 90vw;
    height: 80vh;
    overflow-y: auto;
    overflow-x: unset;
    -ms-overflow-style: none;
    scrollbar-width: none;
    z-index: 499;

    &.horizontal {
      width: 95vw;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    hr {
      border: 1px solid #d0cdcd;
      width: 80vw;
    }

    .row {
      display: flex;
      display: -moz-flex;
      display: -webkit-flex;
      flex-direction: row;
      //align-items: center;
    }

    .column {
      display: flex;
      display: -moz-flex;
      display: -webkit-flex;
      flex-direction: column;
      align-items: center;
    }

    .space-evenly {
      justify-content: space-evenly;
    }

    .card {
      margin: 10px 64px;

      &.mobile {
        margin: 10px 6px;
      }
    }

    .width720px {
      width: 100%;
    }

    .sub-header {
      //width: 450px;
      max-width: 640px;
      font-size: 18px;
      font-weight: 400;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;

      &.mobile {
        width: 318px;
        font-size: 16px;
        font-weight: 400;
      }
    }

    .spacer1 {
      margin-bottom: 10px;
    }

    .spacer2 {
      margin-bottom: 20px;
    }
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
    height: 225px;
    width: 225px;
    overflow: hidden;
    z-index: 0;

    .lf-btm {
      right: 0;
      top: 0;
      height: 100%;
      overflow: hidden;
      z-index: 0;
    }
  }

  .rt-wrapper {
    right: 0;
    bottom: 0;
    height: 220px;
    width: 200px;
    overflow: hidden;
    z-index: 0;

    .rt-btm {
      left: 0px;
      top: 0px;
      height: 100%;
      overflow: hidden;
      z-index: 0;
    }
  }
}
</style>