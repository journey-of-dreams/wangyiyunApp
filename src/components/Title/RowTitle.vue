<template>
  <div class="rowTitle">
    <p class="title"><slot name="title">推荐歌单</slot></p>
    <my-button><slot name="titleBtn">更多></slot></my-button>
  </div>
</template>

<script>
import MyButton from "components/MyButton";
export default {
  name: "RowTitle",
  components: { MyButton },
  setup() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.rowTitle:extend(.flexCenter) {
  height: 50px;
  .title {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
