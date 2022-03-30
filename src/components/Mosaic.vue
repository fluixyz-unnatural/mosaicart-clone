<template>
  <div class="relative">
    <svg
      class="art"
      :width="canvasNums.width"
      :height="canvasNums.height"
      :viewBox="viewBoxString"
    >
      <g v-for="i of 16" :key="i">
        <image
          v-for="j of 16"
          :key="j"
          href="@/assets/img/mosaic/bgStripe.svg"
          width="512"
          height="512"
          :x="i * 256 - 2048"
          :y="j * 256 - 2048"
        />
      </g>
      <!-- モザイクアート一枚絵 !-->
      <image
        v-if="jsonReceived"
        :href="
          'https://shion-dev.s3.ap-northeast-1.amazonaws.com/images/mosaic/' +
          mosaicArtData.mosaic
        "
        :width="imageNums.width"
        @load="mosaicLoaded"
        @error="mosaicLoadError"
        v-show="showElse"
      />
      <!-- 各構成画像を表示する !-->
      <image
        class="thumbnail"
        v-for="image in detailImages.value"
        :key="image"
        :x="image.x * partSize.width"
        :y="image.y * partSize.height"
        :href="imageLink(image)"
        :width="partSize.width"
        v-show="showElse"
      />
      <!-- バインドしたやつ !-->
      <image
        class="binded"
        v-for="image in bindedDetailImages.value"
        :key="image"
        :x="image.x * partSize.width * 4"
        :y="image.y * partSize.height * 4"
        :href="bindImages[image.y][image.x]"
        :width="partSize.width * 4"
        v-show="showElse"
      />
      <!-- 元絵を表示 !-->
      <transition name="fade">
        <image
          v-if="showOriginal || showOriginal2"
          :href="
            'https://shion-dev.s3.ap-northeast-1.amazonaws.com/images/tgt/' +
            mosaicArtData.target
          "
          :width="imageNums.width"
        />
      </transition>
    </svg>
    <!-- 周辺減光、ここでマウス操作を受け取る !-->
    <div
      @wheel="wheelZoom"
      @mousedown.prevent="mouseDown"
      @touchstart.prevent="touchStart"
      @mouseup.prevent="mouseUp"
      @mouseleave="mouseLeave"
      @touchend.prevent="touchEnd"
      @mousemove="mouseMove"
      @touchmove="touchMove"
      class="vignette absolute"
      :class="{
        vignette: true,
        absolute: true,
        cursorgrab: !showFocused,
        cursorpointer: showFocused,
      }"
    ></div>
    <!-- 疑似フォーカス時のポコポコ !-->
    <img
      class="focusImage"
      v-if="showFocused && !isMobile()"
      :style="focusedStyle"
      :width="focusedWidth"
      :src="focusedSrc"
      v-show="showElse"
    />
    <Shiokkos :showShiokko="showShiokko" />
    <transition name="fade" appear>
      <MosaicUI
        v-show="!showOriginal"
        :showHint="showHint"
        :imageWidth="imageNums.width"
        :imageHeight="imageNums.height"
        :absX="viewBoxNums.x"
        :absY="viewBoxNums.y"
        :viewBoxWidth="viewBoxNums.width"
        :viewBoxHeight="viewBoxNums.height"
        :image="mosaicArtData.target"
        @toggleOriginal="toggleOriginal"
      />
    </transition>
    <!-- 詳細モーダル !-->
    <Details
      @DetailPaging="detailPaging"
      v-if="showModal"
      @deleteModal="hideModal"
      :i="selectedImage.y.toString()"
      :j="selectedImage.x.toString()"
      :m="mosaicId"
      :image="imageLink(selectedImage)"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  onMounted,
  onBeforeMount,
  watch,
} from "vue";
import Details from "../components/Details.vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import MosaicUI from "@/components/MosaicUI.vue";
import Shiokkos from "@/components/Shiokkos.vue";

//構成画像を指定するためのインタフェース
export interface image {
  x: number;
  y: number;
  size: number;
}

export interface bindedImage {
  x: number;
  y: number;
  src: Promise<string>;
}

export interface pos {
  x: number;
  y: number;
}

//モザイクjsonを受け取るためのインタフェース
export interface mosaicArt {
  m2da: Array<Array<string>>;
  target: string;
  mosaic: string;
}

export interface imageSize {
  width: number;
  height: number;
}

export default defineComponent({
  name: "Mosaic",
  components: {
    Details,
    MosaicUI,
    Shiokkos,
  },
  props: {
    mosaicId: {
      type: String,
      default: "",
    },
    stage: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const isMobile = () => {
      if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        return true;
      } else {
        return false;
      }
    };

    /*
    初期表示内容周り
    */
    //モザイクjsonデータの取得関連
    const mosaicUrl = "https://api.shionchan.fan";
    let mosaicArtData: mosaicArt = reactive({
      m2da: [[""]],
      target: "",
      mosaic: "",
    });
    const jsonReceived = ref(false);
    const router = useRouter();
    const fetchData = async () => {
      await waitMosaicIdSet();
      await axios
        .get(mosaicUrl + "/mosaic?id=" + props.mosaicId)
        // eslint-disable-next-line
        .then((res: any) => {
          mosaicArtData.m2da = res.data.m2da;
          mosaicArtData.target = res.data.target;
          mosaicArtData.mosaic = res.data.mosaic;
          console.log("mosaci data was fetched by mosaic.vue");
        })
        // eslint-disable-next-line
        .catch((err: any) => {
          alert("Failed to load MosaicData");
          router.push("/");
        });
      jsonReceived.value = true;
    };
    const waitMosaicIdSet = async () => {
      while (props.mosaicId.length == 0) {
        await sleep(10);
      }
    };
    onBeforeMount(async () => {
      fetchData();
    });
    //元絵を表示するかどうかのフラグ
    const showOriginal = ref(true);
    const showElse = ref(false);
    //全体絵が読み込まれたかどうかのフラグ
    let loadedWholeMosaic = false;
    const mosaicLoaded = () => {
      console.log("mosaic image was loaded");
      loadedWholeMosaic = true;
    };
    const mosaicLoadError = () => {
      console.error("Failed to Load Mosaic Whole Image");
      alert("Failed to Load Mosaic Whole Image");
      router.push("/");
    };
    const waitReady = async () => {
      while (!(loadedWholeMosaic && jsonReceived.value)) {
        await sleep(10);
      }
      context.emit("ready");
    };

    // svg内の各種パラメータ
    const canvasNums = reactive({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const imageNums = reactive({
      width: 640,
      height: 360,
      x: 0,
      y: 0,
    });
    const viewBoxNums = reactive({
      x: 0,
      y: 0,
      width: canvasNums.width,
      height: canvasNums.height,
    });

    // ウィンドウサイズにキャンバスをあわせる周りの処理
    const handleResize = () => {
      canvasNums.width = window.innerWidth;
      canvasNums.height = window.innerHeight;
      if (9 * canvasNums.width > 16 * canvasNums.height) {
        //ウィンドウが16:9より横長
        imageNums.width = canvasNums.width;
        imageNums.height = (canvasNums.width * 9) / 16;
      } else {
        imageNums.height = canvasNums.height;
        imageNums.width = (canvasNums.height * 16) / 9;
      }
      viewBoxNums.x = (imageNums.width - canvasNums.width) / 2;
      viewBoxNums.y = (imageNums.height - canvasNums.height) / 2;
      viewBoxNums.width = canvasNums.width;
      viewBoxNums.height = canvasNums.height;
      if (viewBoxNums.x + viewBoxNums.width < imageNums.width * 0.75) {
        viewBoxNums.x = imageNums.width * 0.75 - viewBoxNums.width;
      }
    };
    handleResize();

    //起動後の処理
    const sleep = (msec: number) =>
      new Promise((resolve) => setTimeout(resolve, msec));
    const closeUp = async (i: number, j: number) => {
      const centerX = partSize.value.width * j + partSize.value.width / 2;
      const centerY = partSize.value.height * i + partSize.value.height / 2;
      console.log(centerX, centerY, i, j);
      const ratio = 0.995;
      while (viewBoxNums.width / canvasNums.width > 0.03) {
        viewBoxSet(
          centerX,
          centerY,
          ratio * viewBoxNums.width,
          ratio * viewBoxNums.height
        );
        reloadDetailImages();
        await sleep(10);
      }
    };
    onMounted(async () => {
      window.addEventListener("resize", handleResize);
      await waitReady();
      console.log("mosaic was ready");
      await waitStage("marumie");
      showElse.value = true;
      await sleep(2000);
      showOriginal.value = false;
      setTimeout(() => {
        showShiokko.value = true;
        //塩っ子の表示非表示
        watch(displayedWidth, () => {
          const thre = 0.1;
          const ans =
            displayedWidth.value / window.innerWidth > thre ||
            displayedHeight.value / window.innerHeight > thre;
          showShiokko.value = !ans;
        });
      }, 2500);
      if (route.query.i && route.query.j) {
        const elmI = route.query.i as unknown as number;
        const elmJ = route.query.j as unknown as number;
        if (-1 < elmI && elmI < 100 && -1 < elmJ && elmJ < 100) {
          await closeUp(
            route.query.i as unknown as number,
            route.query.j as unknown as number
          );
          console.log("close upped");
        }
      }
      onPhysics();
    });
    const waitStage = async (targetStage: string) => {
      while (props.stage != targetStage) {
        await sleep(10);
      }
      return;
    };
    const route = useRoute();

    //初期表示の自動ズーム先の算出
    const initTarget = () => {
      if (route.query.i && route.query.j) {
        const i: number = route.query.i as unknown as number;
        const j: number = route.query.j as unknown as number;

        zoomTargetPosX = partSize.value.width * j + partSize.value.width / 2;
        zoomTargetPosY = partSize.value.height * i + partSize.value.height / 2;
        zoomTargetRatio = 0.03;
      } else {
        zoomTargetPosX = imageNums.width / 2;
        zoomTargetPosY = imageNums.height / 2;
        zoomTargetRatio = 1;
      }
    };
    //jsonを受け取ってから算出を開始
    watch(jsonReceived, () => {
      if (jsonReceived.value) initTarget();
    });

    //画像それぞれのsvg上のサイズ等のパラメータ算出
    const arrayHeight = computed(() => mosaicArtData.m2da.length);
    const arrayWidth = computed(() => mosaicArtData.m2da[0].length);
    const partSize = computed((): imageSize => {
      return {
        width: imageNums.width / arrayWidth.value,
        height: imageNums.height / arrayHeight.value,
      };
    });

    /*
      座標変換の関数
    */

    const page2Image = (x: number, y: number) => {
      const onViewBoxX = x * (viewBoxNums.width / canvasNums.width);
      const onViewBoxY = y * (viewBoxNums.height / canvasNums.height);
      const onSvgX = onViewBoxX + viewBoxNums.x;
      const onSvgY = onViewBoxY + viewBoxNums.y;
      return { x: onSvgX, y: onSvgY };
    };
    const image2Page = (x: number, y: number) => {
      const onViewBoxX = x - viewBoxNums.x;
      const onViewBoxY = y - viewBoxNums.y;
      const pageX = onViewBoxX * (canvasNums.width / viewBoxNums.width);
      const pageY = onViewBoxY * (canvasNums.height / viewBoxNums.height);
      return { x: pageX, y: pageY };
    };

    /*
      表示周り
    */
    const showShiokko = ref(false);
    // 構成画像の表示関連
    let detailImages = reactive({ value: new Array<image>() });
    const imageHash = (image: image): number => {
      let ans = 0;
      ans += image.y * 100000;
      ans += image.x * 1000;
      ans += image.size;
      return ans;
    };
    //表示する構成画像を決定
    const displayedPartWidth = (): number =>
      partSize.value.width * (canvasNums.width / viewBoxNums.width);
    const reloadDetailImages = async () => {
      const x1 = viewBoxNums.x;
      const x2 = x1 + viewBoxNums.width;
      const y1 = viewBoxNums.y;
      const y2 = y1 + viewBoxNums.height;

      const out: image[] = [];

      if (displayedPartWidth() > 160) {
        for (
          let i = Math.floor(y1 / partSize.value.height);
          i <= Math.floor(y2 / partSize.value.height);
          i++
        ) {
          for (
            let j = Math.floor(x1 / partSize.value.width);
            j <= Math.floor(x2 / partSize.value.width);
            j++
          ) {
            if (i < 0 || i >= arrayHeight.value) continue;
            if (j < 0 || j >= arrayWidth.value) continue;
            out.push({
              y: i,
              x: j,
              size: gridWidth2resolution(displayedPartWidth()),
            });
          }
        }
      }
      const oldSet = new Set();
      for (let i = 0; i < detailImages.value.length; i++) {
        oldSet.add(imageHash(detailImages.value[i]));
      }
      //if (out.length == detailImages.value.length) return;
      for (let i = 0; i < out.length; i++) {
        if (!oldSet.has(imageHash(out[i]))) {
          detailImages.value = out;
          return;
        }
      }
    };

    //DOM削減のための合体表示
    // i,jが/4される
    let bindedDetailImages = reactive({ value: new Array<pos>() });
    const reloadbindedDetailImages = async () => {
      const startTime = performance.now();
      const x1 = viewBoxNums.x;
      const x2 = x1 + viewBoxNums.width;
      const y1 = viewBoxNums.y;
      const y2 = y1 + viewBoxNums.height;

      const out: pos[] = [];
      if (displayedPartWidth() >= 80 && displayedPartWidth() < 160) {
        for (
          let i = Math.floor(y1 / partSize.value.height / 4);
          i <= Math.floor(y2 / partSize.value.height / 4);
          i++
        ) {
          for (
            let j = Math.floor(x1 / partSize.value.width / 4);
            j <= Math.floor(x2 / partSize.value.width / 4);
            j++
          ) {
            if (i < 0 || i >= arrayHeight.value / 4) continue;
            if (j < 0 || j >= arrayWidth.value / 4) continue;
            out.push({
              y: i,
              x: j,
            });
          }
        }
      } else {
        bindedDetailImages.value = [];
      }
      //無用な更新をなくすやつ
      const oldSet = new Set();
      for (let i = 0; i < bindedDetailImages.value.length; i++) {
        oldSet.add(
          indexHash(
            bindedDetailImages.value[i].y,
            bindedDetailImages.value[i].x
          )
        );
      }
      for (let i = 0; i < out.length; i++) {
        if (!oldSet.has(indexHash(out[i].y, out[i].x))) {
          bindedDetailImages.value = out;
          for (let j = 0; j < out.length; j++) {
            console.log("enqueue");
            bindImageQueue.push({ y: out[j].y, x: out[j].x });
          }
          console.log("reloaded", performance.now() - startTime);
          return;
        }
      }
    };
    const bindImageQueue: Array<pos> = [];
    const indexHash = (i: number, j: number): number => {
      return i * 100 + j;
    };
    const bindImages: Array<Array<string>> = reactive([]);
    for (let tmpi = 0; tmpi < 25; tmpi++) {
      const tmp = [];
      for (let tmpj = 0; tmpj < 25; tmpj++) {
        tmp.push("");
      }
      bindImages.push(tmp);
    }
    const getBindImagePath = async (
      i: number,
      j: number,
      size: number
    ): Promise<string> => {
      if (bindImages[i][j] != "") return bindImages[i][j];
      bindImages[i][j] = "a";
      console.log("getBindImagePath is processing");
      const canvas: HTMLCanvasElement = document.createElement(
        "canvas"
      ) as HTMLCanvasElement;
      if (canvas) {
        canvas.width = 320;
        canvas.height = 180;
        if (size == 80) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            for (let di = 0; di < 4; di++)
              for (let dj = 0; dj < 4; dj++) {
                const img = new Image();
                img.src = imageLink({
                  y: i * 4 + di,
                  x: j * 4 + dj,
                  size: 80,
                }); //ロードを待つ必要がある
                try {
                  img.crossOrigin = "anonymous";
                  while (!img.complete) {
                    await sleep(1);
                  }
                  ctx.drawImage(img, dj * 80, di * 45);
                } catch {
                  console.log("!");
                }
              }
          }
          canvas.toBlob((blob) => {
            bindImages[i][j] = URL.createObjectURL(blob);
          });
        } else if (size == 160) {
          return "pien160";
        }
      }
      return "pien";
    };
    //オリジナル表示
    const showOriginal2 = ref(false);
    const toggleOriginal = () => {
      showOriginal2.value = !showOriginal2.value;
    };
    //ズーム率から表示する画像の解像度を決定
    const gridWidth2resolution = (width: number): number => {
      let size = 80;
      //閾値と解像度
      if (width >= 120) size = 160;
      if (width >= 240) size = 320;
      if (width >= 480) size = 640;
      if (width >= 960) size = 1280;
      return size;
    };
    //構成画像を取得するURLの生成
    const imageLink = (image: image) => {
      let i = image.y;
      let j = image.x;
      let size = image.size;
      const pre = "https://shion-dev.s3.ap-northeast-1.amazonaws.com/images/";
      const resolutions = [
        "80_45/",
        "160_90/",
        "320_180/",
        "640_360/",
        "1280_720/",
      ];
      const resolutionsNum = [80, 160, 320, 640, 1280];
      let reso = resolutions[0];
      for (let i = 0; i < resolutions.length; i++) {
        if (size == resolutionsNum[i]) reso = resolutions[i];
      }
      if (mosaicArtData.m2da[i][j] == undefined) {
        return "";
      }
      return pre + reso + mosaicArtData.m2da[i][j];
    };

    //各画像をクリックしたときのモーダル等
    const selectedImage: image = reactive({ x: 0, y: 0, size: 1280 });
    const showModal = ref(false);
    const selectImage = () => {
      selectedImage.x = focusedImageIndex.x;
      selectedImage.y = focusedImageIndex.y;
      showModal.value = true;
    };
    const hideModal = () => {
      showModal.value = false;
    };
    const detailPaging = (offset: number) => {
      console.log("detailPaging", offset);
      selectedImage.x += offset;
      if (selectedImage.x >= 100) {
        selectedImage.x = 0;
        selectedImage.y++;
      } else if (selectedImage.x < 0) {
        selectedImage.x = 99;
        selectedImage.y--;
      }
    };

    /*
     インタラクティブな操作周り
    */
    const showHint = ref(false);
    //フォーカス系 ポコポコ
    //表示される画像の大きさ
    const focusZoom = 1.1;
    const displayedWidth = computed(() => {
      return partSize.value.width * (canvasNums.width / viewBoxNums.width);
    });
    const displayedHeight = computed(() => {
      return partSize.value.height * (canvasNums.height / viewBoxNums.height);
    });
    const showFocused = computed(() => {
      const thre = 0.1;
      const ans =
        displayedWidth.value / window.innerWidth > thre ||
        displayedHeight.value / window.innerHeight > thre;
      return ans;
    });

    //style
    const focusedStyle = computed(() => {
      const i = focusedImageIndex.y;
      const j = focusedImageIndex.x;
      const partY = i * partSize.value.height;
      const partX = j * partSize.value.width;
      let top =
        (partY - viewBoxNums.y) * (canvasNums.height / viewBoxNums.height);
      let left =
        (partX - viewBoxNums.x) * (canvasNums.height / viewBoxNums.height);
      top -=
        partSize.value.height *
        (canvasNums.height / viewBoxNums.height) *
        ((focusZoom - 1) / 2);
      left -=
        partSize.value.width *
        (canvasNums.width / viewBoxNums.width) *
        ((focusZoom - 1) / 2);
      return "position:absolute; top:" + top + "px; left:" + left + "px;";
    });
    //width
    const focusedWidth = computed(() => {
      return (
        partSize.value.width *
        (canvasNums.width / viewBoxNums.width) *
        focusZoom
      );
    });
    //src
    const focusedImageIndex = reactive({ y: 0, x: 0 });
    const reloadFocusedImageIndex = (cursorX: number, cursorY: number) => {
      const { x, y } = page2Image(cursorX, cursorY);
      const i = Math.min(
        Math.max(Math.floor(y / partSize.value.height), 0),
        99
      );
      const j = Math.min(Math.max(Math.floor(x / partSize.value.width), 0), 99);
      focusedImageIndex.y = i;
      focusedImageIndex.x = j;
    };
    const focusedSrc = computed(() => {
      const i = focusedImageIndex.y;
      const j = focusedImageIndex.x;
      return imageLink({
        y: i,
        x: j,
        size: gridWidth2resolution(displayedWidth.value),
      });
    });

    //速度算出補助
    const canvasSpeed = { x: 0, y: 0 };
    const mousePosZero = { x: 0, y: 0, time: 0 };
    let mousePosArray = reactive([
      mousePosZero,
      mousePosZero,
      mousePosZero,
      mousePosZero,
    ]);
    //自然法則系変数
    const mouseSpeed = computed(() => {
      //mousemove8回分の平均速度
      const dx = mousePosArray[mousePosArray.length - 1].x - mousePosArray[0].x;
      const dy = mousePosArray[mousePosArray.length - 1].y - mousePosArray[0].y;
      const diff =
        mousePosArray[mousePosArray.length - 1].time - mousePosArray[0].time;
      return {
        x: Math.round((1000 * dx) / diff),
        y: Math.round((1000 * dy) / diff),
      }; //px/sec
    });

    //入力受付
    const preventTap = ref(false);
    let dragging = ref(0);
    const wheelZoom = (e: WheelEvent): void => {
      if (showOriginal.value) return;

      const ratio = e.deltaY > 0 ? 1.078 : 1 / 1.078; // スクロールの向きによって逆数にしたりしなかったりする
      const pos = page2Image(e.offsetX, e.offsetY);
      zoomTargetPosX = pos.x;
      zoomTargetPosY = pos.y;
      zoomTargetRatio *= ratio;
      //viewBoxZoom(ratio, pos.x, pos.y);
      reloadDetailImages();
      reloadbindedDetailImages();
    };
    const mouseDown = (e: MouseEvent) => {
      if (e.button != 0) return;
      if (showOriginal.value) return;
      stopCanvas();
    };
    const mouseUp = (e: MouseEvent) => {
      if (e.button != 0) return;
      reloadDetailImages();
      reloadbindedDetailImages();
      if (dragging.value >= 1) giveSpeedCanvas();
      if (dragging.value <= 0) {
        if (showFocused.value) console.log("click", focusedImageIndex);
        if (showFocused.value) selectImage();
      }
      dragging.value = 0;
    };
    const mouseLeave = () => {
      if (showOriginal.value) return;
      if (dragging.value >= 1) giveSpeedCanvas();
      dragging.value = 0;
      reloadDetailImages();
      reloadbindedDetailImages();
    };
    const mouseMove = (e: MouseEvent) => {
      reloadFocusedImageIndex(e.offsetX, e.offsetY);
      //マウスを押しながら動かしているときの処理
      if (e.buttons > 0) dragging.value++;
      mousePosArray.shift();
      mousePosArray.push({
        x: e.offsetX,
        y: e.offsetY,
        time: new Date().getTime(),
      });
      //ドラッグ処理
      if (showOriginal.value) return;
      if (dragging.value >= 1) {
        viewBoxMove(e.movementX, e.movementY);
      }
    };
    const touchStart = (e: TouchEvent) => {
      if (showOriginal.value) return;
      mousePosArray.shift();
      mousePosArray.push({
        x: e.touches[0].pageX,
        y: e.touches[0].pageY,
        time: new Date().getTime(),
      });
      if (e.touches.length > 1) preventTap.value = true;
      stopCanvas();
    };
    const touchEnd = (e: TouchEvent) => {
      console.log("touchend", dragging.value);
      if (showOriginal.value) return;
      if (e.touches.length > 1) {
        const aa = {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY,
          time: new Date().getTime(),
        };
        mousePosArray = reactive([aa, aa, aa, aa]);
      }
      const nspeed =
        mouseSpeed.value.x * mouseSpeed.value.x +
        mouseSpeed.value.y * mouseSpeed.value.y;
      console.log(nspeed);
      if ((nspeed > 30000 || dragging.value >= 10) && !preventTap.value) {
        console.log("givespeed");
        giveSpeedCanvas();
      }
      if (dragging.value <= 10 && !preventTap.value && nspeed < 10000) {
        console.log("tap");
        if (showFocused.value) {
          console.log("tapped");
          reloadFocusedImageIndex(
            e.changedTouches[0].pageX,
            e.changedTouches[0].pageY
          );
          selectImage();
        }
      }
      if (dragging.value <= 0 && preventTap.value) preventTap.value = false;
      dragging.value = 0;
      preDistance = -1;
    };
    let preDistance = -1;
    const touchMove = (e: TouchEvent) => {
      mousePosArray.shift();
      mousePosArray.push({
        x: e.touches[0].pageX,
        y: e.touches[0].pageY,
        time: new Date().getTime(),
      });
      dragging.value++;
      if (showOriginal.value) return;
      if (dragging.value >= 1) {
        viewBoxMove(
          mousePosArray[mousePosArray.length - 1].x -
            mousePosArray[mousePosArray.length - 2].x,
          mousePosArray[mousePosArray.length - 1].y -
            mousePosArray[mousePosArray.length - 2].y
        );
      }
      if (e.touches.length == 2) {
        const x1 = e.touches[0].pageX;
        const y1 = e.touches[0].pageY;
        const x2 = e.touches[1].pageX;
        const y2 = e.touches[1].pageY;
        const d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        const centerX = (x1 + x2) / 2;
        const centerY = (y1 + y2) / 2;
        //ズーム処理
        if (preDistance > 0) viewBoxPinch(preDistance / d, centerX, centerY);
        preDistance = d;
      }
    };

    //キャンバス操作系実装
    const viewBoxMove = (dx: number, dy: number) => {
      viewBoxNums.x -= (dx * viewBoxNums.width) / canvasNums.width;
      viewBoxNums.y -= (dy * viewBoxNums.height) / canvasNums.height;
      hamideruBlock();
      return;
    };
    const viewBoxSet = (
      x: number,
      y: number,
      width: number,
      height: number
    ) => {
      viewBoxNums.x = x - width / 2;
      viewBoxNums.width = width;
      viewBoxNums.y = y - height / 2;
      viewBoxNums.height = height;
      hamideruBlock();
    };
    // 慣性ズームのためのターゲット保持
    // 座標はイラスト画像座標系
    let zoomTargetPosX = 1000;
    let zoomTargetPosY = 500;
    let zoomTargetRatio = 0.05;
    const viewBoxZoom = (ratio: number, centerX: number, centerY: number) => {
      //拡大前のctx,ctyのディスプレイ上の位置
      const preDisplayX = image2Page(centerX, centerY).x;
      const preDisplayY = image2Page(centerX, centerY).y;

      //拡大縮小
      viewBoxNums.width *= ratio;
      viewBoxNums.height *= ratio;
      hamideruBlock();

      //拡大後のディスプレイ上の位置
      const postSvgX = page2Image(preDisplayX, preDisplayY).x;
      const postSvgY = page2Image(preDisplayX, preDisplayY).y;
      viewBoxNums.x -= postSvgX - centerX;
      viewBoxNums.y -= postSvgY - centerY;
      hamideruBlock();
      return;
    };
    const viewBoxPinch = (ratio: number, centerX: number, centerY: number) => {
      const pos = page2Image(centerX, centerY);
      viewBoxZoom(ratio, pos.x, pos.y);
      zoomTargetPosX = viewBoxNums.x;
      zoomTargetPosY = viewBoxNums.y;
      zoomTargetRatio = viewBoxNums.width / canvasNums.width;
    };
    //キャンバス操作系補助
    const hamideruBlock = (): void => {
      //拡大縮小の話

      if (
        viewBoxNums.width > imageNums.width &&
        viewBoxNums.height > imageNums.height
      ) {
        zoomTargetRatio = Math.max(
          viewBoxNums.width / imageNums.width,
          viewBoxNums.height / imageNums.height
        );
        //ウィンドウが16:9より横長
        if (9 * canvasNums.width > 16 * canvasNums.height) {
          viewBoxNums.height = imageNums.height;
          viewBoxNums.width =
            (imageNums.height * canvasNums.width) / canvasNums.height;
        } else {
          viewBoxNums.width = imageNums.width;
          viewBoxNums.height =
            (imageNums.width * canvasNums.height) / canvasNums.width;
        }
      }

      //移動の話
      const marginY = partSize.value.height * 3;
      const marginX = partSize.value.width * 3;
      //16:9より横に長い→縦は等しい
      if (9 * canvasNums.width > 16 * canvasNums.height) {
        viewBoxNums.y = Math.max(viewBoxNums.y, -marginY);
        viewBoxNums.y = Math.min(
          viewBoxNums.y,
          imageNums.height - viewBoxNums.height + marginY
        );
        if (viewBoxNums.x < -marginX) {
          // 左にはみ出る
          if (viewBoxNums.width > imageNums.width) {
            // カメラが引いてる
            viewBoxNums.x = (imageNums.width - viewBoxNums.width) / 2;
          } else {
            // カメラが近い
            viewBoxNums.x = -marginX;
          }
        } else if (
          viewBoxNums.x + viewBoxNums.width >
          imageNums.width + marginX
        ) {
          console.log("右にはみ出てる");
          // 右にはみ出る
          viewBoxNums.x = imageNums.width + marginX - viewBoxNums.width;
        }
        //16:9より縦に長い
      } else {
        viewBoxNums.x = Math.max(viewBoxNums.x, -marginX);
        viewBoxNums.x = Math.min(
          viewBoxNums.x,
          imageNums.width - viewBoxNums.width + marginX
        );
        //上に出てる
        if (viewBoxNums.y < -marginY) {
          if (viewBoxNums.height > imageNums.height) {
            //上にも下にも出ちゃう
            viewBoxNums.y = (imageNums.height - viewBoxNums.height) / 2;
          } else {
            viewBoxNums.y = -marginY;
          }
          //下に出てる
        } else if (
          viewBoxNums.y + viewBoxNums.height >
          marginY + imageNums.height
        ) {
          viewBoxNums.y = imageNums.height - viewBoxNums.height + marginY;
        }
      }

      return;
    };
    const stopCanvas = () => {
      // 画面に触れたとき等にキャンバスが滑るのを止める
      canvasSpeed.x = 0;
      canvasSpeed.y = 0;
      return;
    };
    const giveSpeedCanvas = () => {
      // 画面を滑り出させるためのやつ
      canvasSpeed.x = mouseSpeed.value.x;
      canvasSpeed.y = mouseSpeed.value.y;
      return;
    };
    //フレームごとの処理、慣性とかそういう自然法則系の実装
    const frameProcess = () => {
      window.requestAnimationFrame(frameProcess);
      if (bindImageQueue.length > 0) {
        console.log("frame image path require");
        getBindImagePath(bindImageQueue[0].y, bindImageQueue[0].x, 80);
        bindImageQueue.shift();
      }
      //100fpsのフレームごとの処理
      //慣性ズーム
      const nowRatio = viewBoxNums.width / canvasNums.width;
      const zoomSpeed = 0.02;
      if (Math.abs(1 - nowRatio / zoomTargetRatio) < 0.02) {
        //倍率がほぼターゲット
        0;
      } else if (nowRatio > zoomTargetRatio) {
        //ズームインが必要
        viewBoxZoom(1 - zoomSpeed, zoomTargetPosX, zoomTargetPosY);
        reloadDetailImages();
        reloadbindedDetailImages();
      } else {
        //ズームアウトが必要
        viewBoxZoom(1 / (1 - zoomSpeed), zoomTargetPosX, zoomTargetPosY);
      }

      if (canvasSpeed.x == 0 && canvasSpeed.y == 0) return;

      //減速処理
      const accel = 30; //程よい抵抗ってどのくらい？
      const accelX =
        accel *
        (Math.abs(canvasSpeed.x) /
          (Math.abs(canvasSpeed.x) + Math.abs(canvasSpeed.y)));
      const accelY = accel - accelX;
      if (canvasSpeed.x > 0)
        canvasSpeed.x = Math.max(canvasSpeed.x - accelX, 0);
      else canvasSpeed.x = Math.min(canvasSpeed.x + accelX, 0);
      if (canvasSpeed.y > 0)
        canvasSpeed.y = Math.max(canvasSpeed.y - accelY, 0);
      else canvasSpeed.y = Math.min(canvasSpeed.y + accelY, 0);

      if (canvasSpeed.x == 0 && canvasSpeed.y == 0) {
        reloadDetailImages();
        reloadbindedDetailImages();
      }

      //動く処理
      viewBoxMove(canvasSpeed.x / 100, canvasSpeed.y / 100);
    };
    const onPhysics = () => window.requestAnimationFrame(frameProcess);

    //HTML用の文字列変換
    const viewBoxString = computed(() => {
      return (
        viewBoxNums.x +
        " " +
        viewBoxNums.y +
        " " +
        viewBoxNums.width +
        " " +
        viewBoxNums.height
      );
    });

    return {
      canvasNums,
      imageNums,
      viewBoxString,
      wheelZoom,
      detailImages,
      selectImage,
      partSize,
      mouseDown,
      mouseUp,
      mouseLeave,
      mouseMove,
      showModal,
      hideModal,
      selectedImage,
      showOriginal,
      mouseSpeed,
      canvasSpeed,
      touchStart,
      touchEnd,
      touchMove,
      imageLink,
      mosaicArtData, // Debug
      viewBoxNums, // Debug
      viewBoxZoom, // Debug
      dragging, //debug
      gridWidth2resolution,
      showFocused,
      focusedStyle,
      focusedWidth,
      focusedSrc,
      mosaicLoaded,
      detailPaging,
      getBindImagePath,
      bindedDetailImages,
      bindImages,
      showElse,
      mosaicLoadError,
      jsonReceived,
      toggleOriginal,
      showOriginal2,
      showHint,
      showShiokko,
      preventTap,
      isMobile,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  color: white;
}
.art {
  background-color: #222222;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0 !important;
}
.vignette {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.75),
    inset 0 0 200px rgba(0, 0, 0, 0.3);
  padding: 10px;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.button {
  top: 0;
  right: 0;
  padding: 10px;
  margin: 10px;
}
.focusImage {
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.4);
  pointer-events: none;
}
.cursorpointer {
  cursor: pointer;
}
.cursorgrab {
  cursor: grab;
}
</style>
