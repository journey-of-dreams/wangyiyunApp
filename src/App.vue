<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script>
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      $(".app").css("height", document.documentElement.clientHeight);
    });
  },
};
</script>
