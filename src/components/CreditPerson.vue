<template>
  <div class="credit-person">
    <div>
      <div class="body-name">
        {{ name }}
      </div>
      <div class="body-id">
        @{{ tw_id }}
      </div>
    </div>
    <a class="link" :href="url" target="_blank" ref="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    </a>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreditPerson",
  props: {
    name: {
      type: String,
      default: "",
      required: true
    },
    tw_id: {
      type: String,
      default: "",
      required: true
    }
  },
  setup(props) {
    const url = `https://twitter.com/${props.tw_id}`;

    return {
      props,
      url
    };
  }
});
</script>

<style scoped lang="scss">
.credit-person {
  display: flex;
  display: -moz-flex;
  display: -webkit-flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #222222;
  width: 220px;
  margin: 0 0 12px 0;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  .body-name {
    font-size: 18px;
  }

  .body-id {
    font-size: 16px;
  }

  a {
    width: 24px;
    height: 24px;
    text-decoration: none;
    color: #222222;
    margin: 0 0 0 8px;
  }
}
</style>