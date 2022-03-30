<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "App",
  setup() {
    const { t } = useI18n();
    
    const init = () => {
      document.title = t("title");
    };

    onMounted(() => {
      init();
    });
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
