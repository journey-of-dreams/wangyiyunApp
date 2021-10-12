<template>
  <div class="navItem">
    <van-badge @click="showPopup" :content="20" max="99" :offset="[-5, 5]">
      <i class="iconfont icon-daohang"></i>
    </van-badge>
  </div>
  <van-popup
    style="height: 100%; width: 80%"
    v-model:show="show"
    position="left"
    ><slot></slot>
    </van-popup>
</template>

<script>
import { ref } from "vue";

export default {
  name: "NavItem",
  components: {},
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return {
      show,
      showPopup,
    };
  },
};
</script>
<style lang="less" scoped>
.icon-daohang{
  font-size: 26px;
}
</style>
