<template>
  <div class="myVip">
    <van-cell-group inset class="vanCeilGroup">
      <van-cell
        title="开通黑胶VIp"
        label="黑胶VIP享超21项专属特权"
        class="vanCeil"
      >
        <template #right-icon>
          <van-button class="vipBtn" round type="mini"
            >会员中心</van-button
          ></template
        ></van-cell
      >
      <van-cell title="" class="vanCeil" label="低至5折！立享视频双会员权益">
        <template #right-icon> <i class="iconfont icon-pikachu-"></i></template
      ></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "MyVip",
  components: {},
};
</script>
<style lang="less" scoped>
.myVip {
  .vanCeilGroup {
    background: #000;
    .vanCeil {
      color: peru;
      background: inherit;
      
    }
  }
  .vipBtn {
    color: peru;
    border: 1px solid peru;
    background: inherit;
  }
}
</style>
