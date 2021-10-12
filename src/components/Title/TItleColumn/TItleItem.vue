<template>
  <div class="titleItem">
    <van-tabs
      v-model:active="active"
      title-active-color="#000"
      title-inactive-color="#888"
      line-width="0"
      width="auto"
    >
      <van-tab title="标签 1" v-for="(item, index) in fatherData" :key="index">
        <template #title>
          {{ item }} <i class="iconfont icon-tubiaozhizuo-"></i>
        </template>
        <!-- <router-view></router-view> -->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TitleItem",
  props: ["fatherData"],
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>
<style lang="less" scoped>
.titleItem {
  height: 50px;
  /deep/.van-tab {
    flex: none !important;
  }
}
</style>
